import type { Metadata } from "next";
import styles from "./Terms.module.css";

export const metadata: Metadata = {
  title: "利用規約",
  description: "FuyanTech ポートフォリオサイトの利用規約",
};

export default function TermsPage() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>利用規約</h1>
        <p className={styles.lastUpdated}>制定日: 2026年5月9日</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第1条（適用）</h2>
          <p className={styles.text}>
            本規約は、FuyanTech（以下「当サイト」といいます）が運営する fuyantech.jp の利用条件を定めるものです。ユーザーは本規約に同意の上、当サイトをご利用いただくものとします。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第2条（コンテンツの著作権）</h2>
          <p className={styles.text}>
            当サイトに掲載されている文章、画像、動画、その他のコンテンツの著作権は、原則として当サイトまたは正当な権利を有する第三者に帰属します。
          </p>
          <p className={styles.text}>
            ユーザーは、私的利用の範囲を超えて、当サイトのコンテンツを無断で複製、転載、改変、配布することはできません。引用を行う場合は、著作権法上の正当な範囲内で行い、出典を明記してください。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第3条（リンクについて）</h2>
          <p className={styles.text}>
            当サイトへのリンクは、原則として自由に設定いただけます。ただし、当サイトの内容を誤解させるような形でのリンク、または公序良俗に反するサイトからのリンクはご遠慮ください。
          </p>
          <p className={styles.text}>
            当サイトから外部サイトへのリンクが設置されている場合、当該リンク先サイトのコンテンツについて当サイトは一切の責任を負いません。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第4条（禁止事項）</h2>
          <p className={styles.text}>
            ユーザーは、当サイトの利用にあたり、以下の行為を行ってはなりません。
          </p>
          <ul className={styles.list}>
            <li>法令または公序良俗に違反する行為</li>
            <li>当サイトまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利を侵害する行為</li>
            <li>当サイトの運営を妨害する行為、サーバーに過度な負荷をかける行為</li>
            <li>不正アクセスをし、またはこれを試みる行為</li>
            <li>当サイトの情報を改ざん、複製、転載、再配布する行為（私的利用および引用の範囲を除く）</li>
            <li>その他、当サイトが不適切と判断する行為</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第5条（免責事項）</h2>
          <p className={styles.text}>
            当サイトに掲載されている情報の正確性については万全を期していますが、その正確性、完全性、有用性、最新性等について保証するものではありません。
          </p>
          <p className={styles.text}>
            当サイトの利用、または利用できなかったことにより生じた一切の損害について、当サイトは責任を負いません。
          </p>
          <p className={styles.text}>
            当サイトで紹介しているアプリケーション、サービス等は、各提供元の規約・仕様に従ってご利用ください。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第6条（広告について）</h2>
          <p className={styles.text}>
            当サイトでは、第三者配信の広告サービスを利用する場合があります。広告に関する個人情報の取り扱いについては、別途定める
            <a href="/privacy">プライバシーポリシー</a>
            をご参照ください。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第7条（サービス内容の変更・停止）</h2>
          <p className={styles.text}>
            当サイトは、ユーザーへの事前通知をもって、当サイトのコンテンツや機能を変更、追加、または停止することがあります。これによりユーザーに生じた損害について、当サイトは責任を負いません。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第8条（利用規約の変更）</h2>
          <p className={styles.text}>
            当サイトは、必要と判断した場合には、ユーザーに通知することなく本規約を変更することができるものとします。変更後の本規約は、当サイト上に表示した時点より効力を生じるものとします。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第9条（準拠法・裁判管轄）</h2>
          <p className={styles.text}>
            本規約の解釈にあたっては、日本法を準拠法とします。当サイトに関して紛争が生じた場合には、当サイト運営者の住所地を管轄する裁判所を専属的合意管轄裁判所とします。
          </p>
        </section>

        <div className={styles.footer}>
          <p>以上</p>
        </div>
      </div>
    </main>
  );
}
