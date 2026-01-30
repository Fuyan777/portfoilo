import type { Metadata } from "next";
import styles from "./Terms.module.css";

export const metadata: Metadata = {
  title: "利用規約 | FuyanTech",
  description: "FuyanTechの利用規約",
};

export default function TermsPage() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>利用規約</h1>
        <p className={styles.lastUpdated}>最終更新日: 2026年1月29日</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第1条（適用）</h2>
          <p className={styles.text}>
            本規約は、本サービスの提供条件及び本サービスの利用に関する当社とユーザーとの間の権利義務関係を定めることを目的とし、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第2条（定義）</h2>
          <p className={styles.text}>
            本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。
          </p>
          <ul className={styles.list}>
            <li>
              「本サービス」とは、当社が提供するすべてのサービスを意味します。
            </li>
            <li>
              「ユーザー」とは、本サービスを利用する全ての方を意味します。
            </li>
            <li>「当社」とは、FuyanTechを意味します。</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第3条（サブスクリプション）</h2>
          <h3 className={styles.subsectionTitle}>3.1 料金と支払い</h3>
          <p className={styles.text}>
            有料プランをご利用の場合、選択されたプランに応じた料金が発生します。料金は事前に明示され、選択されたプランに従って請求されます。
          </p>

          <h3 className={styles.subsectionTitle}>3.2 自動更新</h3>
          <p className={styles.text}>
            サブスクリプションは、キャンセルされない限り、選択された期間（月次または年次）ごとに自動的に更新されます。自動更新の停止を希望される場合は、次回の更新日の前にキャンセル手続きを行ってください。
          </p>

          <h3 className={styles.subsectionTitle}>3.3 キャンセル</h3>
          <p className={styles.text}>
            サブスクリプションはいつでもキャンセルすることができます。キャンセルした場合、現在の請求期間の終了時にサービスへのアクセスが停止されます。期間中のキャンセルによる日割り返金は行いません。
          </p>

          <h3 className={styles.subsectionTitle}>3.4 返金ポリシー</h3>
          <p className={styles.text}>
            原則として、一度お支払いいただいた料金の返金は行いません。ただし、当社の責めに帰すべき事由によりサービスが提供できなかった場合は、この限りではありません。返金はApp
            Storeのポリシーに従います。
          </p>

          <h3 className={styles.subsectionTitle}>3.5 料金の変更</h3>
          <p className={styles.text}>
            当社は、必要に応じて料金プランを変更する権利を留保します。料金変更の場合は、事前に通知いたします。変更後も継続してサービスをご利用いただく場合、新しい料金にご同意いただいたものとみなします。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第4条（禁止事項）</h2>
          <p className={styles.text}>
            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
          </p>
          <ul className={styles.list}>
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>
              当社、本サービスの他のユーザー、または第三者の権利を侵害する行為
            </li>
            <li>本サービスの運営を妨害するおそれのある行為</li>
            <li>不正アクセスをし、またはこれを試みる行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>不正な目的を持って本サービスを利用する行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第5条（知的財産権）</h2>
          <p className={styles.text}>
            本サービス上で提供される全てのコンテンツ（テキスト、画像、動画、音声、ソフトウェア等）に関する知的財産権は、当社または当社にライセンスを許諾している第三者に帰属します。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第6条（免責事項）</h2>
          <p className={styles.text}>
            当社は、本サービスに関して、ユーザーと第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。本サービスは現状有姿で提供されるものであり、当社は本サービスについて、特定の目的への適合性、商業的有用性、完全性、継続性等を含め、一切保証いたしません。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第7条（サービス内容の変更等）</h2>
          <p className={styles.text}>
            当社は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第8条（利用規約の変更）</h2>
          <p className={styles.text}>
            当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の本規約は、本サービス上に表示した時点より効力を生じるものとします。
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>第9条（準拠法・裁判管轄）</h2>
          <p className={styles.text}>
            本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </section>

        <div className={styles.footer}>
          <p>以上</p>
        </div>
      </div>
    </main>
  );
}
