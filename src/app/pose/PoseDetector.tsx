"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import styles from "./Pose.module.css";

const VISION_VERSION = "0.10.18";
const WASM_CDN =
  `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${VISION_VERSION}/wasm`;
const VISION_BUNDLE_URL =
  `https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@${VISION_VERSION}/vision_bundle.mjs`;

/* eslint-disable */
let visionPromise: Promise<any> | null = null;

function loadVisionModule(): Promise<any> {
  if (visionPromise) return visionPromise;

  // Dynamic import() with a full CDN URL.
  // The browser resolves relative chunk imports (./948.js) against the module's
  // CDN origin, not the page origin. webpackIgnore prevents the bundler from
  // intercepting this import.
  visionPromise = import(
    /* webpackIgnore: true */
    VISION_BUNDLE_URL
  );

  return visionPromise;
}
/* eslint-enable */

const POSE_CONNECTIONS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 7],
  [0, 4], [4, 5], [5, 6], [6, 8],
  [9, 10],
  [11, 12],
  [11, 13], [13, 15], [15, 17], [15, 19], [15, 21], [17, 19],
  [12, 14], [14, 16], [16, 18], [16, 20], [16, 22], [18, 20],
  [11, 23], [12, 24], [23, 24],
  [23, 25], [25, 27], [27, 29], [27, 31], [29, 31],
  [24, 26], [26, 28], [28, 30], [28, 32], [30, 32],
];

// Landmark indices
const NOSE = 0;
const LEFT_SHOULDER = 11;
const RIGHT_SHOULDER = 12;
const LEFT_WRIST = 15;
const RIGHT_WRIST = 16;

const NECK_TILT_THRESHOLD = 0.03; // horizontal offset ratio to trigger

type Landmark = { x: number; y: number; z: number; visibility?: number };

interface DetectionState {
  leftHandRaised: boolean;
  rightHandRaised: boolean;
  neckTilt: "left" | "right" | "center";
}

function detectGestures(landmarks: Landmark[]): DetectionState {
  // Hand raise: wrist above shoulder
  const leftHandRaised = landmarks[LEFT_WRIST].y < landmarks[LEFT_SHOULDER].y;
  const rightHandRaised = landmarks[RIGHT_WRIST].y < landmarks[RIGHT_SHOULDER].y;

  // Neck tilt: nose X offset from shoulder midpoint
  const shoulderMidX = (landmarks[LEFT_SHOULDER].x + landmarks[RIGHT_SHOULDER].x) / 2;
  const noseOffsetX = landmarks[NOSE].x - shoulderMidX;

  let neckTilt: "left" | "right" | "center" = "center";
  if (noseOffsetX < -NECK_TILT_THRESHOLD) {
    neckTilt = "left";
  } else if (noseOffsetX > NECK_TILT_THRESHOLD) {
    neckTilt = "right";
  }

  return { leftHandRaised, rightHandRaised, neckTilt };
}

function drawHUD(
  ctx: CanvasRenderingContext2D,
  state: DetectionState,
  canvasWidth: number,
) {
  const neckLabel =
    state.neckTilt === "left" ? "← Left" :
    state.neckTilt === "right" ? "Right →" : "Center";
  const neckActive = state.neckTilt !== "center";

  const rows: { label: string; value: string; active: boolean }[] = [
    { label: "Left Hand", value: state.leftHandRaised ? "▲ UP" : "— down", active: state.leftHandRaised },
    { label: "Right Hand", value: state.rightHandRaised ? "▲ UP" : "— down", active: state.rightHandRaised },
    { label: "Neck", value: neckLabel, active: neckActive },
  ];

  // Background
  ctx.beginPath();
  ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
  ctx.roundRect(canvasWidth - 260, 10, 250, 26 * rows.length + 20, 8);
  ctx.fill();

  rows.forEach(({ label, value, active }, i) => {
    const y = 36 + i * 26;

    ctx.font = "bold 16px sans-serif";
    ctx.fillStyle = "#aaa";
    ctx.textAlign = "left";
    ctx.fillText(label, canvasWidth - 248, y);

    ctx.font = "bold 18px sans-serif";
    ctx.fillStyle = active ? "#4caf50" : "#666";
    ctx.textAlign = "right";
    ctx.fillText(value, canvasWidth - 20, y);
  });
}

type Status = "idle" | "loading" | "running" | "error";

export default function PoseDetector() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number>(0);
  const streamRef = useRef<MediaStream | null>(null);

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const stop = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = 0;
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setStatus("idle");
  }, []);

  const start = useCallback(async () => {
    setStatus("loading");
    setErrorMsg("");

    try {
      // Load MediaPipe Vision via CDN script tag to avoid bundler issues
      const vision = await loadVisionModule();
      const { PoseLandmarker, FilesetResolver, DrawingUtils } = vision;

      const filesetResolver = await FilesetResolver.forVisionTasks(WASM_CDN);

      const poseLandmarker = await PoseLandmarker.createFromOptions(
        filesetResolver,
        {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",
            delegate: "GPU",
          },
          runningMode: "VIDEO",
          numPoses: 1,
        }
      );

      // Get camera
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });
      streamRef.current = stream;

      const video = document.createElement("video");
      video.srcObject = stream;
      video.playsInline = true;
      video.muted = true;
      await video.play();
      videoRef.current = video;

      const canvas = canvasRef.current!;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d")!;
      const drawingUtils = new DrawingUtils(ctx);

      setStatus("running");

      let lastTime = -1;
      let gestureState: DetectionState = { leftHandRaised: false, rightHandRaised: false, neckTilt: "center" };

      const detect = () => {
        if (!streamRef.current) return;

        if (video.currentTime !== lastTime) {
          lastTime = video.currentTime;
          const now = performance.now();

          ctx.save();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.translate(canvas.width, 0);
          ctx.scale(-1, 1);
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          ctx.restore();

          const result = poseLandmarker.detectForVideo(video, now);

          if (result.landmarks && result.landmarks.length > 0) {
            for (const landmarks of result.landmarks) {
              const mirrored = landmarks.map((lm: Record<string, number>) => ({
                ...lm,
                x: 1 - lm.x,
              }));

              drawingUtils.drawConnectors(
                mirrored,
                POSE_CONNECTIONS.map(([s, e]) => ({ start: s, end: e })),
                { color: "#00FF00", lineWidth: 2 }
              );
              drawingUtils.drawLandmarks(mirrored, {
                color: "#FF0000",
                lineWidth: 1,
                radius: 3,
              });

              gestureState = detectGestures(landmarks);
            }
          } else {
            gestureState = { leftHandRaised: false, rightHandRaised: false, neckTilt: "center" };
          }

          drawHUD(ctx, gestureState, canvas.width);
        }

        rafRef.current = requestAnimationFrame(detect);
      };

      rafRef.current = requestAnimationFrame(detect);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Unknown error";
      setErrorMsg(msg);
      setStatus("error");
      stop();
    }
  }, [stop]);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);

  const isRunning = status === "running";
  const isLoading = status === "loading";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pose Detection</h1>

      <div className={styles.canvasWrapper}>
        <canvas ref={canvasRef} className={styles.canvas} />
        {status === "idle" && (
          <div className={styles.overlay}>Press Start to begin</div>
        )}
        {isLoading && (
          <div className={styles.overlay}>Loading model...</div>
        )}
        {status === "error" && (
          <div className={styles.overlay}>{errorMsg || "Error occurred"}</div>
        )}
      </div>

      <div className={styles.controls}>
        <button
          className={`${styles.button} ${styles.startButton}`}
          onClick={start}
          disabled={isRunning || isLoading}
        >
          Start
        </button>
        <button
          className={`${styles.button} ${styles.stopButton}`}
          onClick={stop}
          disabled={!isRunning}
        >
          Stop
        </button>
      </div>
    </div>
  );
}
