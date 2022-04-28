import "./App.css";
import Entertainment from "./Components/Entertainment";
import Business from "./Components/Business.js"
import { BrowserRouter as Router, Route, Link, Switch, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";


function IndexPage() {
  return <Home />;
}

function BusinessArticles() {
  return <Business />;
}

function EntertainmentArticles() {
  return <Entertainment />;
}

function NoMatch() {
  const location = useLocation();

  return (
    <h3>
     <center> No match for {location.pathname} </center>
    </h3>
  );
}
const App = () => {
  
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark" className="justify-content-center">
          <Link to="/" className="Nav-Link">
            Home
          </Link>
          &nbsp;&nbsp;
          <Link to="/business" className="Nav-Link">
            Business
          </Link>
          &nbsp;&nbsp;
          <Link to="/entertainment" className="Nav-Link">
            Entertainment
          </Link>
        </Navbar>
        <Switch>
          // by convention `/` is listed first with exact={true}
          <Route exact={true} path="/">
            <IndexPage />
          </Route>
          <Route path="/business">
            <BusinessArticles />
          </Route>
          <Route path="/entertainment">
            <EntertainmentArticles />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
