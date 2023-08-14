import { useState } from "react";
import "./menu.css";

type Page = "home" | "todos" | "teams";

export function MainMenu() {
  //const active: string = "teams";
  const [active, setActive] = useState<Page>("home");

  const elements = [
    { text: "Home", name: "home" },
    { text: "Todos", name: "todos" },
    { text: "Teams", name: "teams" }
  ];

  return (
    <ul id="top-menu-bar">
      {elements.map(element => (
        <li>
          <a
            href={"#" + element.name}
            className={active === element.name ? "active" : ""}
            onClick={() => {
              setActive(element.name as Page); //tmp use 'as Page'
            }}
          >
            {element.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
