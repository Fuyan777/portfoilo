import SectionHeader from "../../SectionHeader/SectionHeader";
import styles from "./YouTube.module.css";

const youtubeVideos = [
  {
    title: "【個人開発】AIといっしょ アプリ100個どのくらい稼げる？1~4本目を紹介",
    videoId: "RpoC_dFzT0I",
  },
  {
    title: "【バイブコーディング】ゼルダの伝説を作ってみた",
    videoId: "ICiD41kNyfk",
  },
];

export default function YouTube() {
  return (
    <main className="main" id="youtube">
      <SectionHeader title={"YouTube"} />

      <div className={styles.videoListContainer}>
        {youtubeVideos.map((video) => (
          <div className={styles.videoItem} key={video.videoId}>
            <div className={styles.videoWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
