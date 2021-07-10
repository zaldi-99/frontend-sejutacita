import "./App.css";
import { Category, Header } from "./components";
import { Bookmark, Home, Showbiz } from "./pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Category />
        <Switch>
          <Route path="/" exact component={Showbiz} />
          <Route path="/:category" component={Home} />
          {/* <Route path="/bookmark" exact component={Bookmark} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
