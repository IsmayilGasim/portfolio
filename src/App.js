import React from "react";
// import DropDownMenu from "../src/components/responsiveMenu.js";
// import Header from "../src/components/header.js";
import ResponsiveMenu from "../src/components/responsiveMenu.js";

export default function App() {
  const myStyle = {
    marginTop: "600px"
  };
  return (
    <div className="App">
      <ResponsiveMenu />
    </div>
  );
}
