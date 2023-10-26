import "./Header.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Haunted Tomatoes logo" />
    </div>
  );
};

export default Header;
