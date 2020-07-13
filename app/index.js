import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./styles/index.css";
import NewUser from "./components/NewUser";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <>
                <Header />
                <Body />
              </>
            </Route>
            <Route path="/user" component={() => <NewUser />}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
