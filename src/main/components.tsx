import { TeamsTableWrapper } from "../teams/TeamsTable";

export function ContentWrapper() {
  return (
    <div id="main">
      <div className="tbar">
        <button id="removeSelected">❌ Remove selected</button>
        <div>
          <input type="search" name="search" id="searchTeams" placeholder="Search..." />
          <label htmlFor="searchTeams">🔎</label>
        </div>
      </div>

      <TeamsTableWrapper />
    </div>
  );
}
