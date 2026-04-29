"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import nextConfig from "../../../next.config.mjs";
import styles from "./Sibatori.module.css";

type Phase = "idle" | "playing" | "finished";
type FurTuft = { id: number; x: number; y: number; rotate: number };
type FlyingFur = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotate: number;
};
type Grab = {
  furId: number;
  pointerId: number;
  startX: number;
  startY: number;
  baseX: number;
  baseY: number;
  pointerX: number;
  pointerY: number;
};

const GAME_DURATION = 60;
const SPAWN_INTERVAL_MS = 350;
const MAX_FUR = 15;
const SHIBA_IMAGE = "sibatori-body.png";
const PLUCK_DISTANCE = 48; // px
const DRAG_THRESHOLD = 6; // px — below this, keep the fur's initial rotation
const FUR_HEIGHT = 40; // must match CSS .fur height
const PLUCK_SOUND = "pluck.mp3";
const SOUND_POOL_SIZE = 4; // allow overlapping playback for rapid plucks

export default function Sibatori() {
  const BASE_PATH = nextConfig.basePath || "";
  const [phase, setPhase] = useState<Phase>("idle");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [furs, setFurs] = useState<FurTuft[]>([]);
  const [flying, setFlying] = useState<FlyingFur[]>([]);
  const [grab, setGrab] = useState<Grab | null>(null);
  const furIdRef = useRef(0);
  const shibaFrameRef = useRef<HTMLDivElement>(null);
  const soundPoolRef = useRef<HTMLAudioElement[]>([]);
  const soundIdxRef = useRef(0);

  useEffect(() => {
    const pool: HTMLAudioElement[] = [];
    for (let i = 0; i < SOUND_POOL_SIZE; i++) {
      const audio = new Audio(`${BASE_PATH}/${PLUCK_SOUND}`);
      audio.preload = "auto";
      audio.volume = 0.6;
      pool.push(audio);
    }
    soundPoolRef.current = pool;
    return () => {
      pool.forEach((a) => {
        a.pause();
        a.src = "";
      });
    };
  }, [BASE_PATH]);

  const playPluckSound = useCallback(() => {
    const pool = soundPoolRef.current;
    if (!pool.length) return;
    const audio = pool[soundIdxRef.current % pool.length];
    soundIdxRef.current = (soundIdxRef.current + 1) % pool.length;
    try {
      audio.currentTime = 0;
      void audio.play().catch(() => {
        // Autoplay policies may reject the first play if user hasn't interacted;
        // plucking requires a pointer event, so subsequent plays should succeed.
      });
    } catch {
      // Ignore — sound is a nice-to-have.
    }
  }, []);

  const startGame = useCallback(() => {
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setFurs([]);
    setFlying([]);
    setGrab(null);
    furIdRef.current = 0;
    setPhase("playing");
  }, []);

  const pluckFur = useCallback(
    (fur: FurTuft, vx: number, vy: number) => {
      setFurs((prev) => prev.filter((f) => f.id !== fur.id));
      setScore((s) => s + 1);
      setFlying((prev) => [
        ...prev,
        { id: fur.id, x: fur.x, y: fur.y, vx, vy, rotate: fur.rotate },
      ]);
      playPluckSound();
      if (typeof navigator !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate?.(15);
      }
      window.setTimeout(() => {
        setFlying((prev) => prev.filter((f) => f.id !== fur.id));
      }, 600);
    },
    [playPluckSound],
  );

  useEffect(() => {
    if (phase !== "playing") return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          setPhase("finished");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "playing") return;
    const spawn = setInterval(() => {
      setFurs((prev) => {
        if (prev.length >= MAX_FUR) return prev;
        const id = ++furIdRef.current;
        return [
          ...prev,
          {
            id,
            x: 25 + Math.random() * 50,
            y: 22 + Math.random() * 45,
            rotate: Math.random() * 360,
          },
        ];
      });
    }, SPAWN_INTERVAL_MS);
    return () => clearInterval(spawn);
  }, [phase]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>, fur: FurTuft) => {
      if (phase !== "playing") return;
      const frame = shibaFrameRef.current;
      if (!frame) return;
      e.preventDefault();
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
      // Anchor sits at (fur.x%, fur.y%) within the shibaFrame, regardless of the fur's
      // current rotation — computing from the element's bounding rect would give a
      // rotated/skewed position.
      const frameRect = frame.getBoundingClientRect();
      const baseX = frameRect.left + frameRect.width * (fur.x / 100);
      const baseY = frameRect.top + frameRect.height * (fur.y / 100);
      setGrab({
        furId: fur.id,
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        baseX,
        baseY,
        pointerX: e.clientX,
        pointerY: e.clientY,
      });
    },
    [phase],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>, fur: FurTuft) => {
      setGrab((current) => {
        if (!current || current.pointerId !== e.pointerId) return current;
        const pullDx = e.clientX - current.startX;
        const pullDy = e.clientY - current.startY;
        const pullDist = Math.hypot(pullDx, pullDy);
        if (pullDist >= PLUCK_DISTANCE) {
          pluckFur(fur, pullDx, pullDy);
          return null;
        }
        return { ...current, pointerX: e.clientX, pointerY: e.clientY };
      });
    },
    [pluckFur],
  );

  const handlePointerEnd = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>) => {
      setGrab((current) => {
        if (!current || current.pointerId !== e.pointerId) return current;
        return null;
      });
    },
    [],
  );

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Score</span>
          <span className={styles.statValue}>{score}</span>
        </div>
        <h1 className={styles.title}>柴犬の換毛期</h1>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Time</span>
          <span className={styles.statValue}>{timeLeft}</span>
        </div>
      </header>

      <div className={styles.stage}>
        <div className={styles.shibaFrame} ref={shibaFrameRef}>
          <img
            src={`${BASE_PATH}/${SHIBA_IMAGE}`}
            alt="柴犬"
            className={styles.shiba}
            draggable={false}
          />
          {phase === "playing" &&
            furs.map((fur) => {
              const isGrabbed = grab?.furId === fur.id;
              let tilt = fur.rotate;
              let scaleY = 1;
              if (isGrabbed && grab) {
                const pullDist = Math.hypot(
                  grab.pointerX - grab.startX,
                  grab.pointerY - grab.startY,
                );
                // Keep the initial rotation until the user actually drags, otherwise
                // a mere tap would snap the fur toward the finger direction.
                if (pullDist > DRAG_THRESHOLD) {
                  const vx = grab.pointerX - grab.baseX;
                  const vy = grab.pointerY - grab.baseY;
                  // Fur defaults to pointing up (-Y). atan2 measures from +X, so +90° aligns up → pointer.
                  tilt = Math.atan2(vy, vx) * (180 / Math.PI) + 90;
                  const len = Math.hypot(vx, vy);
                  scaleY = Math.max(0.9, Math.min(len / FUR_HEIGHT, 2.2));
                }
              }
              return (
                <button
                  key={fur.id}
                  type="button"
                  aria-label="毛を引き抜く"
                  className={`${styles.fur} ${isGrabbed ? styles.furGrabbed : ""}`}
                  style={{
                    left: `${fur.x}%`,
                    top: `${fur.y}%`,
                    transform: `translate(-50%, -100%) rotate(${tilt}deg) scaleY(${scaleY})`,
                  }}
                  onPointerDown={(e) => handlePointerDown(e, fur)}
                  onPointerMove={(e) => handlePointerMove(e, fur)}
                  onPointerUp={handlePointerEnd}
                  onPointerCancel={handlePointerEnd}
                />
              );
            })}

          {flying.map((f) => (
            <div
              key={`fly-${f.id}`}
              className={styles.flyingFur}
              style={
                {
                  left: `${f.x}%`,
                  top: `${f.y}%`,
                  ["--fly-x" as string]: `${f.vx * 3}px`,
                  ["--fly-y" as string]: `${f.vy * 3 - 40}px`,
                  ["--rotate" as string]: `${f.rotate}deg`,
                } as React.CSSProperties
              }
            />
          ))}

          {phase === "idle" && (
            <div className={styles.overlay}>
              <h2 className={styles.overlayTitle}>換毛期！毛抜きゲーム</h2>
              <p className={styles.overlayText}>
                毛をつまんで引っ張って抜こう！
                <br />
                60秒でどれだけ取れるかな？
              </p>
              <button
                type="button"
                className={styles.primaryButton}
                onClick={startGame}
              >
                スタート
              </button>
            </div>
          )}

          {phase === "finished" && (
            <div className={styles.overlay}>
              <h2 className={styles.overlayTitle}>タイムアップ！</h2>
              <p className={styles.overlayScore}>
                <span className={styles.overlayScoreNum}>{score}</span>
                <span className={styles.overlayScoreUnit}> 本</span>
              </p>
              <button
                type="button"
                className={styles.primaryButton}
                onClick={startGame}
              >
                もう一度
              </button>
            </div>
          )}
        </div>
      </div>

      <footer className={styles.footer}>
        <Link href="/" className={styles.backLink}>
          ← Back to Portfolio
        </Link>
      </footer>
    </main>
  );
}
