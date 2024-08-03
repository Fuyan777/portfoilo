import SectionHeader from "../../SectionHeader/SectionHeader";
import styles from "./Profile.module.css";
import nextConfig from "../../../../../next.config.mjs";

const profileInfo = [
  { label: "出　身", value: "北海道出身" },
  { label: "生年月日", value: "1998.7.13" },
  { label: "血液型", value: "O型" },
  { label: "MBTI", value: "INTJ" },
  { label: "趣　味", value: "ダンス / 歌 / K-POP" },
  { label: "出　演", value: "推しの子 / PとJK（エキストラ）" },
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
          <div className={styles.titleContainer}>
            <h1 className={styles.profileTitle}>山田 楓也</h1>
            <h2 className={styles.profileSubtitle}>Fuya Yamada</h2>
          </div>
          <div className={styles.info}>
            {profileInfo.map((item, index) => (
              <div className={styles.infoRow} key={index}>
                <span className={styles.infoLabel}>{item.label}</span>
                <span className={styles.infoDivider}>|</span>
                <span className={styles.infoValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
