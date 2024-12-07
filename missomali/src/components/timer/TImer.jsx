import Time from "./Time";
import styles from "./timer.module.scss"
import Countdown from 'react-countdown';

const TImer = () => {

  // Random component
const Completion = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completion/>;
  } else {
    // Render a countdown
    return (
      <Time days={days} hours={hours} minutes={minutes} seconds={seconds}/>
    )
  }
};




  return (
    <div className={styles.countdown}>
      {/* 1000 milliseconds * 60 seconds * 60 minutes * 24 how many days  */}
        <Countdown date={Date.now() + 86400000} renderer={renderer} />
    </div>
  )
}

export default TImer
