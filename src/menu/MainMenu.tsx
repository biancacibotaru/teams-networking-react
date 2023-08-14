import "./menu.css";
const active: string = "teams";
export function MainMenu() {
  return (
    <ul id="top-menu-bar">
      <li>
        <a href="#home" className={active === "home" ? "active" : ""}>
          Home
        </a>
      </li>
      <li>
        <a href="#todos" className={active === "todos" ? "active" : ""}>
          To Do's
        </a>
      </li>
      <li>
        <a href="#teams" className={active === "teams" ? "active" : ""}>
          Teams
        </a>
      </li>
    </ul>
  );
}
