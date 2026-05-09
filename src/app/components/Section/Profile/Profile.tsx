import SectionHeader from "../../SectionHeader/SectionHeader";
import styles from "./Profile.module.css";
import nextConfig from "../../../../../next.config.mjs";

const profileInfo: { label: string; value: string; link?: string }[] = [
  { label: "出　身", value: "北海道出身" },
  { label: "血液型", value: "O型" },
  { label: "MBTI", value: "INTJ" },
  { label: "趣　味", value: "ダンス / 歌 / K-POP" },
  { label: "出　演", value: "推しの子 / PとJK（エキストラ）" },
  {
    label: "TikTok",
    value: "@fuyantech",
    link: "https://www.tiktok.com/@fuyantech",
  },
  {
    label: "Email",
    value: "fuya0713@gmail.com",
    link: "mailto:fuya0713@gmail.com",
  },
];
export default function Profile() {
  const BASE_PATH = nextConfig.basePath || "";

  return (
    <main className="main" id="profile">
      <SectionHeader title={"Profile"} />

      <div className={styles.container}>
        <div className={styles.profile}>
          <img
            src={`${BASE_PATH}/profile.jpeg`}
            alt="alt"
            className={styles.profileImage}
          />
          <div className={styles.info}>
            {profileInfo.map((item, index) => (
              <div className={styles.infoRow} key={index}>
                <span className={styles.infoLabel}>{item.label}</span>
                <span className={styles.infoDivider}>|</span>
                <span className={styles.infoValue}>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
