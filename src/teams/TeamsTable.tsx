import React from "react";
import { deleteTeamRequest, loadTeamsRequest } from "./middleware";

type Team = { id: string; url: string; promotion: string; members: string; name: string };

type RowProps = { team: Team };
type RowActions = {
  deleteTeam(id: string): void;
  startEdit(team: Team): void;
};

function TeamRow(props: RowProps & RowActions) {
  const { id, url, promotion, members, name } = props.team;
  const displayUrl = url.startsWith("https://github.com/") ? url.substring(19) : url;
  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <input type="checkbox" name="selected" value={id} />
      </td>
      <td>{promotion}</td>
      <td>{members}</td>
      <td>{name}</td>
      <td>
        <a href={url} target="_blank" rel="noreferrer">
          {displayUrl}
        </a>
      </td>
      <td>
        <button
          type="button"
          className="action-btn edit-btn"
          onClick={() => {
            props.startEdit(props.team);
          }}
        >
          &#9998;
        </button>
        <button
          type="button"
          className="action-btn remove-btn"
          onClick={() => {
            props.deleteTeam(id);
          }}
        >
          🗑
        </button>
      </td>
    </tr>
  );
}

type EditRowProps = {
  team: Team;
};
type EditRowActions = {
  inputChange(value: string): void;
};

function EditTeamRow(props: EditRowProps & EditRowActions) {
  //console.info("edit row", props);
  const { id, promotion, members, name, url } = props.team;
  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <input type="checkbox" name="selected" value={id} />
      </td>
      <td>
        <input
          type="text"
          name="promotion"
          value={promotion}
          placeholder="Enter promotion"
          required
          onChange={e => {
            props.inputChange(e.target.value);
          }}
        />
      </td>
      <td>
        <input type="text" name="members" value={members} placeholder="Enter members" required />
      </td>
      <td>
        <input type="text" name="name" value={name} placeholder="Enter name" required />
      </td>
      <td>
        <input type="text" name="url" value={url} placeholder="Enter url" required />
      </td>
      <td>
        <button type="submit" className="action-btn">
          💾
        </button>
        <button type="reset" className="action-btn">
          ✖
        </button>
      </td>
    </tr>
  );
}

type Props = { loading: boolean; teams: Team[]; team: Team };
type Actions = {
  deleteTeam(id: string): void;
  startEdit(team: Team): void;
  inputChange(value: string): void;
  save(): void;
};

export function TeamsTable(props: Props & Actions) {
  return (
    <form
      action=""
      method="get"
      className={props.loading ? "loading-mask" : ""}
      onSubmit={e => {
        e.preventDefault();
        props.save();
      }}
    >
      <table className="table-view">
        <colgroup>
          <col className="select-all-columns" />
          <col style={{ width: "20%" }} />
          <col style={{ width: "40%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "15%" }} />
          <col className="table-actions" />
        </colgroup>
        <thead>
          <tr>
            <th>
              <input type="checkbox" name="selectAll" id="selectAll" />
            </th>
            <th>Promotion</th>
            <th>Members</th>
            <th>Project Name</th>
            <th>Project URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.teams.map(team => {
            if (team.id === props.team.id) {
              return <EditTeamRow key={team.id} team={props.team} inputChange={props.inputChange} />;
            }
            return (
              <TeamRow
                key={team.id}
                team={team}
                deleteTeam={function (id) {
                  props.deleteTeam(id);
                }}
                startEdit={props.startEdit}
              />
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input type="text" name="promotion" placeholder="Enter promotion" required disabled={!!props.team.id} />
            </td>
            <td>
              <input type="text" name="members" placeholder="Enter members" required disabled={!!props.team.id} />
            </td>
            <td>
              <input type="text" name="name" placeholder="Enter name" required disabled={!!props.team.id} />
            </td>
            <td>
              <input type="text" name="url" placeholder="Enter url" required disabled={!!props.team.id} />
            </td>
            <td>
              <button type="submit" className="action-btn" title="Add" disabled={!!props.team.id}>
                ➕
              </button>
              <button type="reset" className="action-btn" title="Reset" disabled={!!props.team.id}>
                ✖
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

type WrapperProps = {};
type State = { loading: boolean; teams: Team[]; team: Team };

export class TeamsTableWrapper extends React.Component<WrapperProps, State> {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      teams: [],
      team: {
        id: "",
        promotion: "",
        members: "",
        name: "",
        url: ""
      }
    };
  }

  componentDidMount(): void {
    this.loadTeams();
  }

  loadTeams() {
    loadTeamsRequest().then(teams => {
      console.info("loaded", teams);
      this.setState({ loading: false, teams });
    });
  }

  render() {
    return (
      <TeamsTable
        loading={this.state.loading}
        teams={this.state.teams}
        team={this.state.team}
        deleteTeam={async id => {
          this.setState({ loading: true });
          const status = await deleteTeamRequest(id);
          if (status.success) {
            this.loadTeams();
          }
        }}
        startEdit={team => {
          console.info("start edit", team);
          this.setState({ team });
        }}
        inputChange={value => {
          console.info("input change %o", value);
          this.setState(state => {
            const team = { ...state.team };
            team.promotion = value;
            return {
              team
            };
          });
        }}
        save={() => {
          console.warn("save");
        }}
      />
    );
  }
}
