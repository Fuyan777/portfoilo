import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <main className="main">
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
    </main>
  );
}
