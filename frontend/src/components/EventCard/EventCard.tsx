/* eslint-disable react/prop-types */
import "./EventCard.css";
import PropTypes from "prop-types";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";

const EventCard: React.FC<{ event: any }> = ({ event }) => {
  const getOrdinalNum = (number: number) => {
    let selector;

    if (number <= 0) {
      selector = 4;
    } else if ((number > 3 && number < 21) || number % 10 > 3) {
      selector = 0;
    } else {
      selector = number % 10;
    }

    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return number + ["th", "st", "nd", "rd", ""][selector];
  };

  // function formatAMPM(date: Date) {
  //   let hours = date.getHours();
  //   let minutes = date.getMinutes();
  //   const ampm = hours >= 12 ? "pm" : "am";
  //   hours = hours % 12;
  //   hours = hours || 12; // the hour '0' should be '12'
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   const strTime = hours + ":" + minutes + " " + ampm;
  //   return strTime;
  // }

  const eventDateObj = new Date(event.eventDates[0].date);
  const eventDateStr = eventDateObj.toDateString();
  const eventDateStrSplit = eventDateStr.split(" ");
  const organizer = event.eventDates[0].users[0];
  const eventTime = eventDateObj.toLocaleTimeString();

  return (
    <div className="event-card">
      <div className="event-card-upper">
        <div className="header">
          <span className="event-name">{event.name}</span>
          <span className="event-office">{event.office.name}</span>
        </div>
        <div className="event-card-content">
          <div className="event-date">
            <h2>
              {getOrdinalNum(parseInt(eventDateStrSplit[2]))}{" "}
              {eventDateStrSplit[1]}
            </h2>
            <h3>{eventDateStrSplit[3]}</h3>
          </div>
          <div className="event-detail">
            <h4>
              Organizer: {organizer.firstName} {organizer.lastName}
            </h4>
            <p>
              {event.status === "Finalized"
                ? "Time: "
                : "Location suggestion: "}
              : {eventTime.slice(0, 4) + eventTime.slice(7)}
            </p>
            <span>
              {event.status === "Finalized"
                ? "Location: "
                : "Location suggestion: "}
            </span>
            <br />
            <span>{event.location}</span>
          </div>
          <div className="event-extra-info"></div>
        </div>
      </div>
      <div className="event-card-lower">
        <div className="event-card-lower-btn">
          <button>
            <AiOutlineCheckCircle />
          </button>
        </div>
        <div className="event-card-lower-btn">
          <button>
            <BsShare />
          </button>
        </div>
        <div className="event-card-lower-btn">
          <button>
            <FiMoreHorizontal />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
