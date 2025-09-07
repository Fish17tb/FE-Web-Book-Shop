import Countdown, { zeroPad } from "react-countdown";
import { GiAlarmClock } from "react-icons/gi";
import "./CountdownTimer.css"; // import css

type CountdownTimerProps = {
  targetDate: string; // Ví dụ: "2025-12-31T23:59:59"
};

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      return (
        <span className="expired">
          <GiAlarmClock style={{fontSize: "30px"}} />
          Chương trình khuyến mại đã kết thúc!
        </span>
      );
    } else {
      return (
        <div className="countdown-container">
          {renderBox(days, "NGÀY")}
          {renderBox(hours, "GIỜ")}
          {renderBox(minutes, "PHÚT")}
          {renderBox(seconds, "GIÂY")}
        </div>
      );
    }
  };

  const renderBox = (value: number, label: string) => (
    <div className="time-box">
      <span className="time-value">{zeroPad(value)}</span>
      <span className="time-label">{label}</span>
    </div>
  );

  return <Countdown date={new Date(targetDate)} renderer={renderer} />;
};

export default CountdownTimer;
