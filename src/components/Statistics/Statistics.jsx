import styles from './Statistics.module.css';

export default function Statistics({ good = 0, neutral = 0, bad = 0 }) {
  return (
    <div>
      <h2 className={styles.header}>Statistics</h2>
      <ul className={styles.list}>
        <li className={styles.item}>Good: <span className={styles.good}>{good}</span></li>
        <li className={styles.item}>Neutral: <span className={styles.neutral}>{neutral}</span></li>
        <li className={styles.item}>Bad: <span className={styles.bad}>{bad}</span></li>
      </ul>
    </div>
  )
}
