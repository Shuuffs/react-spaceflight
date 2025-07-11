import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">📰 All News</Link>
        </li>
        <li>
          <Link to="/about">ℹ️ About</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
