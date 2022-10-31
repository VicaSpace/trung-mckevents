import "./EventCalendar.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventCalendar = () => {
  return (
    <div>
      <Calendar className="event-calendar" />
    </div>
  );
};

export default EventCalendar;
