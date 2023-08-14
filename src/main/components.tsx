import { TeamsTableWrapper } from "../teams/TeamsTable";

export function ContentWrapper() {
  let search = "Nicolae";
  return (
    <div id="main">
      <div className="tbar">
        <button id="removeSelected">❌ Remove selected</button>
        <div>
          <input
            type="search"
            name="search"
            id="searchTeams"
            placeholder="Search..."
            onChange={e => {
              console.info("search", e.target.value);
              search = e.target.value;
            }}
          />
          <label htmlFor="searchTeams">🔎</label>
        </div>
      </div>

      <TeamsTableWrapper search={search} />
    </div>
  );
}
