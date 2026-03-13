import type { Metadata } from "next";
import PoseDetector from "./PoseDetector";

export const metadata: Metadata = {
  title: "Pose Detection - FuyanTech",
  description: "Real-time pose detection with MediaPipe",
};

export default function PosePage() {
  return <PoseDetector />;
}
