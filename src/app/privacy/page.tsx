import type { Metadata } from "next";
import styles from "./Privacy.module.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "FuyanTech ポートフォリオサイトのプライバシーポリシー。アクセス解析、Cookie、第三者配信広告(Google AdSense)に関する取り扱いを記載しています。",
};

export default function PrivacyPage() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>プライバシーポリシー</h1>
        <p className={styles.lastUpdated}>制定日: 2026年5月9日</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第1条（はじめに）</h2>
          <p className={styles.text}>
            FuyanTech（以下「当サイト」といいます）は、当サイト（fuyantech.jp）におけるユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第2条（取得する情報）</h2>
          <p className={styles.text}>
            当サイトでは、ユーザーが当サイトを閲覧する際に、以下の情報を自動的に取得する場合があります。
          </p>
          <ul className={styles.list}>
            <li>IPアドレス</li>
            <li>ブラウザの種類・バージョン</li>
            <li>OSの種類・バージョン</li>
            <li>リファラ（参照元）</li>
            <li>閲覧したページのURL</li>
            <li>アクセス日時</li>
            <li>Cookie 情報</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第3条（情報の利用目的）</h2>
          <p className={styles.text}>
            当サイトは、取得した情報を以下の目的で利用します。
          </p>
          <ul className={styles.list}>
            <li>当サイトの運営、改善、トラブル対応のため</li>
            <li>アクセス状況の分析および統計データの作成のため</li>
            <li>広告配信の最適化のため</li>
            <li>お問い合わせに対する回答のため</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第4条（Cookie の使用について）</h2>
          <p className={styles.text}>
            当サイトでは、ユーザーの利便性向上およびアクセス解析・広告配信のために Cookie を使用する場合があります。Cookie とは、ユーザーが当サイトを閲覧した際にブラウザに保存される小さなテキストファイルであり、個人を特定する情報は含まれません。
          </p>
          <p className={styles.text}>
            ユーザーはブラウザの設定により Cookie の受け入れを拒否することができますが、その場合、当サイトの一部機能が利用できなくなる可能性があります。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第5条（第三者配信の広告サービスについて）</h2>
          <p className={styles.text}>
            当サイトでは、第三者配信の広告サービス（Google AdSense）を利用する場合があります。広告配信事業者は、ユーザーの興味に応じた広告を表示するために、当サイトや他サイトへのアクセス情報（Cookie 等）を使用することがあります。これらの情報には、氏名・住所・メールアドレス・電話番号などの個人を特定する情報は含まれません。
          </p>
          <p className={styles.text}>
            Google による広告に使用される Cookie を無効にする方法、および第三者配信事業者の Cookie を無効にする方法については、以下のページをご参照ください。
          </p>
          <ul className={styles.list}>
            <li>
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Google 広告に関するポリシー
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Google 広告設定ページ
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第6条（アクセス解析ツールについて）</h2>
          <p className={styles.text}>
            当サイトでは、サイトの利用状況を把握するために、Google が提供するアクセス解析ツール「Google Analytics」を導入する場合があります。Google Analytics は、トラフィックデータの収集のために Cookie を使用しており、このトラフィックデータは匿名で収集されています。個人を特定するものではありません。
          </p>
          <p className={styles.text}>
            この機能はブラウザの設定で Cookie を無効にすることで収集を拒否することができます。詳しくは
            <a
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Google Analytics 利用規約
            </a>
            をご参照ください。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第7条（個人情報の第三者提供）</h2>
          <p className={styles.text}>
            当サイトは、ユーザーから取得した個人情報を、法令に基づく場合を除き、ユーザー本人の同意なく第三者に提供することはありません。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第8条（免責事項）</h2>
          <p className={styles.text}>
            当サイトに掲載されている情報の正確性については万全を期していますが、利用者が当サイトの情報を用いて行う一切の行為について、当サイトは何ら責任を負うものではありません。
          </p>
          <p className={styles.text}>
            当サイトからリンクされている他のサイトおよびサービスについては、当サイトは責任を負いかねますので、各サイトのプライバシーポリシーをご確認ください。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第9条（著作権）</h2>
          <p className={styles.text}>
            当サイトに掲載されている文章・画像等の著作権は、原則として当サイトに帰属します。引用の範囲を超えて無断で転載・複製することを禁じます。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第10条（プライバシーポリシーの変更）</h2>
          <p className={styles.text}>
            当サイトは、必要に応じて本プライバシーポリシーの内容を変更することがあります。変更後のプライバシーポリシーは、当サイト上に掲載した時点から効力を生じるものとします。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第11条（お問い合わせ）</h2>
          <p className={styles.text}>
            本ポリシーに関するお問い合わせは、以下までご連絡ください。
          </p>
          <p className={styles.text}>
            Email:{" "}
            <a href="mailto:fuya0713@gmail.com" className={styles.link}>
              fuya0713@gmail.com
            </a>
          </p>
        </section>

        <div className={styles.footer}>
          <p>以上</p>
        </div>
      </div>
    </main>
  );
}
