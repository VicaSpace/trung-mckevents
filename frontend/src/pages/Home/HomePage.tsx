import EventCard from "../../components/EventCard/EventCard";
import NavBar from "../../components/Navbar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import ToolBar from "../../components/ToolBar/ToolBar";
import "./HomePage.css";
import axios from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {
  interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
    email: string;
  }

  interface EventDate {
    id: number;
    eventId: number;
    date: string;
    users: User[];
  }

  interface Event {
    id: number;
    name: string;
    status: string;
    officeId: number;
    location: string;
    minimumUser: number;
    eventDates: EventDate[];
  }

  const [eventList, setEventList] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEventList = async () => {
      const eventList: Event[] = (
        await axios.get("http://localhost:4001/api/events")
      ).data;

      setEventList(eventList);
    };

    fetchEventList().catch((e) => {
      console.log(e);
    });
  }, []);

  return (
    <div className="parent-container">
      <NavBar />
      <div className="container">
        <SideBar />
        <div className="content-container">
          <div className="content">
            <h1 className="event-title">Upcoming Events</h1>
            <ToolBar />
            <div className="event-list-container">
              {eventList.map((event) => {
                return <EventCard key={event.id} event={event} />;
              })}
              {/* <EventCard />
              <EventCard />
              <EventCard /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
