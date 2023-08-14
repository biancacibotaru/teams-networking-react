import { useState } from "react";
import { TeamsTableWrapper } from "../teams/TeamsTable";
import { Page } from "./models";

export function TeamsPage() {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="tbar">
        <button id="removeSelected">❌ Remove selected</button>
        <div>
          <input
            type="search"
            placeholder="Search..."
            onChange={e => {
              console.info("search", e.target.value);
              //search = e.target.value;
              setSearch(e.target.value);
            }}
          />
          <label htmlFor="searchTeams">🔎</label>
        </div>
      </div>
      <TeamsTableWrapper search={search} />
    </>
  );
}

export function HomePage() {
  return <div>Home...</div>;
}

export function TodosPage() {
  return <div>Todos...</div>;
}

export function ContentWrapper() {
  //console.warn("wrapper.render %o", search);
  const activePage: Page = "teams" as Page;

  // {activePage === "home" ? <HomePage /> : null}
  // {activePage === "todos" && <TodosPage />}

  const page = getActivePage(activePage);

  // switch (activePage) {
  //   case "home":
  //     page = <HomePage />;
  //     break;
  //   case "todos":
  //     page = <TodosPage />;
  //     break;
  //   case "teams":
  //     page = <TeamsPage />;
  //     break;
  //   default: {
  //     page = <HomePage />;
  //     break;
  //   }
  // }

  return <div id="main">{page}</div>;
}

function getActivePage(activePage: Page) {
  switch (activePage) {
    case "home":
      return <HomePage />;
    case "todos":
      return <TodosPage />;
    case "teams":
      return <TeamsPage />;
    default: {
      return <HomePage />;
    }
  }
}
