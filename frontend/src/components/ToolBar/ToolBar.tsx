import "./ToolBar.css";
import { AiOutlineSearch } from "react-icons/ai";

const ToolBar = () => {
  return (
    <div className="toolbar-container">
      <div className="create-event">
        <button>Create new event</button>
      </div>
      <div className="toolbar-content">
        <div className="search-filter-sort">
          <div className="search">
            <div className="search-bar">
              <input
                //   onChange={(event) => handleSearchNote(event.target.value)}
                type="text"
                placeholder="input search text"
              />
              <AiOutlineSearch className="search-icon" size="1.3em" />
            </div>
          </div>
          <div className="filter-sort"></div>
        </div>
        <div className="location">filter-sort</div>
      </div>
    </div>
  );
};

export default ToolBar;
