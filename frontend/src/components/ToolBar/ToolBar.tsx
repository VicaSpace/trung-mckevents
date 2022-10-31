import "./ToolBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const ToolBar = () => {
  const toggleFilterDropdown = () => {
    document.getElementById("myDropdown")?.classList.toggle("show");
  };
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
                className="search-input"
              />
              <button className="search-button">
                <AiOutlineSearch size="1.3em" />
              </button>
            </div>
          </div>
          <div className="filter-sort">
            <button
              className="filter-sort-btn"
              onClick={(e) => toggleFilterDropdown()}
            >
              Filter <IoIosArrowDown className="arrow-down" />
            </button>
            <div id="myDropdown" className="dropdown-content">
              <ul className="filter-area">
                <li>
                  <label htmlFor="date">
                    <input
                      className=""
                      type="checkbox"
                      name="filter-options"
                      value="date"
                    />
                    By Date
                  </label>
                </li>
                <li>
                  <label htmlFor="office">
                    <input
                      className=""
                      type="checkbox"
                      name="filter-options"
                      value="office"
                    />
                    By Office
                  </label>
                </li>
                <li>
                  <label htmlFor="my-event">
                    <input
                      className=""
                      type="checkbox"
                      name="filter-options"
                      value="my-event"
                    />
                    My event
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="location">filter-sort</div>
      </div>
    </div>
  );
};

export default ToolBar;
