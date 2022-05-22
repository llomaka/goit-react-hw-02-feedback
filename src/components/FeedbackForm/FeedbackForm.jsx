import Button from "components/Button/Button"

export default function FeedbackForm() {
  return (
    <div>
      <h1>Please Leave Feedback</h1>
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
  )
}
