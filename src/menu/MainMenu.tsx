import { useState } from "react";
import "./menu.css";

type Page = "home" | "todos" | "teams";

export function MainMenu() {
  //const active: string = "teams";
  const [active, setActive] = useState<Page>("home");
  return (
    <ul id="top-menu-bar">
      <li>
        <a
          href="#home"
          className={active === "home" ? "active" : ""}
          onClick={() => {
            setActive("home");
          }}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#todos"
          className={active === "todos" ? "active" : ""}
          onClick={() => {
            setActive("todos");
          }}
        >
          Todos
        </a>
      </li>
      <li>
        <a
          href="#teams"
          className={active === "teams" ? "active" : ""}
          onClick={() => {
            setActive("teams");
          }}
        >
          Teams
        </a>
      </li>
    </ul>
  );
}
