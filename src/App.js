import React from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>You are good to go!</span>;

const renderer = ({hours, minutes, seconds, completed}) => {
  if (completed) {
    return <Completionist />;
  } else {
    return <span>{hours}:{minutes}:{seconds}</span>
  }
};

function App() {
  return (
    <div>
      <h2>Countdown</h2>
      <div>
        <Countdown
          date={Date.now() + 10000}
          renderer={renderer}
        >
          <Completionist />
        </Countdown>
      </div>
    </div>
  );
}

export default App;
