import "./EventCard.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";

const EventCard = () => {
  return (
    <div className="event-card">
      <div className="event-card-upper">
        <div className="header">
          <span className="event-name">Sup on Sai Gon River</span>
          <span className="event-office">Ho Chi Minh office</span>
        </div>
        <div className="event-card-content">
          <div className="event-date">
            <h2>27th Oct</h2>
            <h3>2022</h3>
          </div>
          <div className="event-detail">
            <h4>Organizer: KrishnaDixit</h4>
            <p>Time: 7:30AM</p>
            <span>Location: </span>
            <br />
            <span>Sai Gon River, Ho Chi Minh city</span>
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
