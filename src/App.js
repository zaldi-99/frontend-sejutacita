import "./App.css";
import { Category, Header } from "./components";
import { Home, Showbiz } from "./pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Category />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/TOP" exact component={Home} />
          <Route path="/showbiz" component={Showbiz} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
