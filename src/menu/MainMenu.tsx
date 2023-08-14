import { useState } from "react";
import "./menu.css";
import { Page } from "../main/models";

type Props = {
  activePage: Page;
};
type Actions = {
  setActive(active: Page): void;
};

export function MainMenu(props: Props & Actions) {
  const elements = [
    { text: "Home", name: "home" },
    { text: "Todos", name: "todos" },
    { text: "Teams", name: "teams" }
  ];

  return (
    <ul className="menu-bar">
      {elements.map(element => (
        <li key={element.name}>
          <a
            href={"#" + element.name}
            className={props.activePage === element.name ? "active" : ""}
            onClick={() => {
              props.setActive(element.name as Page); //tmp use 'as Page'
            }}
          >
            {element.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
