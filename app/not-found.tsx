import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from '@/styles/marketing.module.css';

export default function NotFound() {
  return (
    <div className={styles.page}>
      <section className={`${styles.hero} ${styles.heroCentered}`}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>404</span>
            <h1 className={styles.pageTitle}>Page not found</h1>
            <p className={styles.pageLead}>
              ページが見つかりません。お探しのページは削除されたか、名前が変更された可能性があります。
              The page you are looking for might have been removed or renamed.
            </p>
            <div className={styles.actionRow}>
              <Link href="/ja/" className={styles.linkButton}>
                <Button size="lg">日本語ホームページ</Button>
              </Link>
              <Link href="/en/" className={styles.linkButton}>
                <Button size="lg" variant="outline">English Homepage</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
