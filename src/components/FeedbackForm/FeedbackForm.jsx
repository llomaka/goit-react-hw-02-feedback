import Button from "components/Button/Button";
import styles from './FeedbackForm.module.css';

export default function FeedbackForm() {
  return (
    <div>
      <h1 className={styles.header}>Please Leave Feedback</h1>
      <div className={styles.group}>
        <Button
          text="Good"
        />
        <Button
          text="Neutral"
        />
        <Button
          text="Bad"
        />
      </div>
    </div>
  )
}
