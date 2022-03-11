import "./menu.scss";

export default function Menu({ menuIcon, setMenuIcon }) {
  return (
    <div className={"menu " + (!menuIcon && "active")}>
      <ul>
        <li onClick={() => setMenuIcon(!menuIcon)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuIcon(!menuIcon)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setMenuIcon(!menuIcon)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenuIcon(!menuIcon)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
