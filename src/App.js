import "./App.css";
import { Category, Header } from "./components";
import { Home, MainPage, Bookmarks } from "./pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Category />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/bookmarks" exact component={Bookmarks} />
          <Route path="/:category" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
