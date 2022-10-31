import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="">McKEvents</a>
      </div>
      <div className="navbar-button">
        <button className="signin-button">Sign in</button>
        <button className="signup-button">Sign up</button>
      </div>
    </div>
  );
};
export default NavBar;
