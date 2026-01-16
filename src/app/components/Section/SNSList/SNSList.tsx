import SectionHeader from "../../SectionHeader/SectionHeader";
import styles from "./SNSList.module.css";

const snsItems = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCckTCYUlcNGtWJ25JLspNFA",
    icon: "🎥",
    description: "動画コンテンツ",
  },
  {
    name: "Note",
    url: "https://note.com/fuyantech",
    icon: "📝",
    description: "技術記事・エッセイ",
  },
  {
    name: "Zenn",
    url: "https://zenn.dev/fuya777/books/67a40f438c9c56",
    icon: "📚",
    description: "技術書・記事",
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@fuyantech",
    icon: "🎵",
    description: "ショート動画",
  },
];

export default function SNSList() {
  return (
    <main className="main" id="sns">
      <SectionHeader title={"SNS"} />

      <div className={styles.snsListContainer}>
        {snsItems.map((item) => (
          <a
            href={item.url}
            key={item.name}
            className={styles.snsItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.iconContainer}>
              <span className={styles.icon}>{item.icon}</span>
            </div>
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.description}>{item.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
