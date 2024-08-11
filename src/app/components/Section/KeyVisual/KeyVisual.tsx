"use client";
import styles from "./KeyVisual.module.css";
import nextConfig from "../../../../../next.config.mjs";
import { useEffect, useRef } from "react";

export default function KeyVisual() {
  const BASE_PATH = nextConfig.basePath || "";
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <main className="main">
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.video}
          src={`${BASE_PATH}/demo.mp4`}
          width="600"
          loop
          autoPlay
          muted
          playsInline
        />
        <div className={styles.overlay}>
          <h2 className={styles.title}>FuyanTech</h2>
          <div className={styles.nameContainer}>
            <h2 className={styles.name}>Fuya</h2>
            <h2 className={styles.name}>Yamada</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
