import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Timer = ({ isPlaying }) => {
  const [time, setTime] = useState(0.0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isPlaying) {
      const id = setInterval(() => {
        setTime((prevTime) => parseFloat((prevTime + 0.1).toFixed(1)));
      }, 100);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
    }

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  return (
    <div className="Time">
      <label>Time:</label>
      <span>{time.toFixed(1)}s</span>
    </div>
  );
};

Timer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
};

export default Timer;
