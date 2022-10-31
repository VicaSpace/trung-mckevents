import NavBar from "../../components/Navbar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import ToolBar from "../../components/ToolBar/ToolBar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="parent-container">
      <NavBar />
      <div className="container">
        <SideBar />
        <div className="content-container">
          <div className="content">
            <h1 className="event-title">Upcoming Events</h1>
            <ToolBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
