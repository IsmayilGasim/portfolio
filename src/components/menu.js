import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../components/logo.js";
class Menu extends React.Component {
  render() {
    // const myStyle = {
    //   display: "flex",
    //   color: "green",
    //   listStyleType: "none",
    //   justifyContent: "space-between"
    // };

    return (
      <div>
        <nav
          className={"navbar navbar-expand-md bg-danger navbar-dark fixed-top"}
        >
          <Logo className={"navbar-logo"} />

          <ul className={"navbar-nav"}>
            <li className={"nav-item"}>
              <a className={"nav-link"} href="#1">
                Home
              </a>
            </li>
            <li className={"nav-item"}>
              <a className={"nav-link"} href="#1">
                Contact Us
              </a>
            </li>
            <li className={"nav-item"}>
              <a className={"nav-link"} href="#1">
                Home
              </a>
            </li>
            <li className={"nav-item"}>
              <a className={"nav-link"} href="#1">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
