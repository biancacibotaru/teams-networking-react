import { Team } from "./models";

let loadUrl = "http://localhost:3000/teams-json";

if (window.location.host === "biancacibotaru.github.io") {
  loadUrl = "https://nmatei.github.io/teams-networking/data/teams.json";
}

export function loadTeamsRequest(): Promise<Team[]> {
  return fetch(loadUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(r => r.json());
}

export function deleteTeamRequest(id: string, callback?: (status: any) => void): Promise<{ success: boolean }> {
  return fetch("http://localhost:3000/teams-json/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id })
  })
    .then(r => r.json())
    .then(status => {
      if (typeof callback === "function") {
        callback(status);
      }
      return status;
    });
}

export function updateTeamRequest(team: Team): Promise<{ success: boolean }> {
  return fetch("http://localhost:3000/teams-json/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then(r => r.json());
}

export function createTeamRequest(team: Team): Promise<{ success: boolean; id: string }> {
  return fetch("http://localhost:3000/teams-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then(r => r.json());
}
