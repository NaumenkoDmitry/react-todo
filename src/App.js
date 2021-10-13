import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import TodoListPage from "./page/TodoListPage";
import TodoTaskPage from "./page/TodoTaskPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            listStyle: "none",
          }}
        >
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/listPage">listPage</Link>
          </li>
          <li>
            <Link to="/veb">VEB</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/veb" component={TodoListPage} />
        <Route path="/veb" component={TodoTaskPage} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
