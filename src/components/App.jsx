import FeedbackForm from "./FeedbackForm/FeedbackForm";
import Statistics from "./Statistics/Statistics";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <FeedbackForm />
      <Statistics />
    </div>
  );
};
