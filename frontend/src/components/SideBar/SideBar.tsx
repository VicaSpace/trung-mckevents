import EventCalendar from "../Calendar/EventCalendar";
import TodayEventList from "../TodayEventList/TodayEventList";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <EventCalendar />
      <TodayEventList />
    </div>
  );
};

export default SideBar;
