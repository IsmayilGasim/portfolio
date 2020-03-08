import React from "react";
import Menu from "../components/menu.js";
//import ReactDOM from 'react-dom';

class Header extends React.Component {
  renderWord() {
    return "red";
  }
  render() {
    return (
      <div>
        <Menu />
      </div>
    );
  }
}

export default Header;
