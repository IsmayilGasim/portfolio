import React from "react";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import Menu from "../components/menu.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Menu from "../components/menu.js";
import Logo from "../components/logo.js";
class ResponsiveMenu extends React.Component {
  render() {
    // const myStyle = {
    //   width: "50px",
    //   height: "50px"
    // };
    // const myStyle = {
    //   marginTop: "300px"
    // };
    return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}

          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">İsmayıl Qasımov</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">
                  <Link to="/">Menu</Link>
                </Nav.Link>
                <Nav.Link href="#pricing">
                  <Link to="/about">Pricing</Link>
                </Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                  <Link to="/users">More deets</Link>
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/about">
              <ResponsiveMenu />
            </Route>
            <Route path="/users">
              <Menu />
            </Route>
            <Route path="/">
              <Logo />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default ResponsiveMenu;
