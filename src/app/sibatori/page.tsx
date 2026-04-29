import type { Metadata } from "next";
import Sibatori from "./Sibatori";

export const metadata: Metadata = {
  title: "Sibatori - FuyanTech",
  description: "60秒で柴犬の抜け毛をどれだけ取れるか挑戦！",
};

export default function SibatoriPage() {
  return <Sibatori />;
}
