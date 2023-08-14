import "./style.css";
import logo from "../images/network-team-icon.png";
import { MainMenu } from "../menu/MainMenu";
import { Page } from "../main/models";

type Props = {
  activePage: Page;
};
type Actions = {
  setActive(active: Page): void;
};
export default function AppHeader(props: Props & Actions) {
  return (
    <header>
      <div id="header-wrapper">
        <div id="my-picture">
          <img src={logo} alt="" width="100" />
        </div>
        <div id="header-info">
          <h1>Teams Networking</h1>
          <h2>
            <span className="app-icon">{getIcon(props.activePage)}</span>CRUD operations example (Create, Read, Update,
            Delete)
          </h2>
        </div>
      </div>

      <MainMenu activePage={props.activePage} setActive={props.setActive} />
    </header>
  );
}

// Record...
const icons: { [key in Page]: string } = {
  home: "🏡",
  todos: "📋",
  teams: "👨‍👩‍👦‍👦"
};
function getIcon(page: Page) {
  return icons[page];
}
