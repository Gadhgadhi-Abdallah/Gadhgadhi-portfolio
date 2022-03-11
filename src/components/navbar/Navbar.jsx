import "./navbar.scss";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Zoom from "@material-ui/core/Zoom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "@material-ui/core/Link";

export default function Navbar({ menuIcon, setMenuIcon }) {
  return (
    <div className={"navbar " + (!menuIcon && "active")} id="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Abdallah.G
          </a>
          <div className="itemContainer">
            <CallIcon className="icon" />
            <span>+216 50 773 883</span>
          </div>
          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>gadabdallah@gmail.com</span>
          </div>
          <Link href="https://www.linkedin.com/in/abdallah-gadhgadhi-972058134/" target="_blank">
            <LinkedInIcon className="socialIcon" />
          </Link>
          <Link href="https://github.com/Gadhgadhi-Abdallah" target="_blank">
            <GitHubIcon className="socialIcon" />
          </Link>
        </div>

        <div className="right" onClick={() => setMenuIcon(!menuIcon)}>
          {menuIcon ? (
            <Zoom className="zoom" in={menuIcon}>
              <MenuIcon className="hamburger" />
            </Zoom>
          ) : (
            <CloseIcon className="close" />
          )}
        </div>
      </div>
    </div>
  );
}
