import React from "react";
//import ReactDOM from 'react-dom';

class Logo extends React.Component {
  render() {
    const myStyle = {
      width: "50px",
      height: "50px"
    };
    return (
      <div>
        <img
          src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687"
          alt="item"
          style={myStyle}
        />
      </div>
    );
  }
}

export default Logo;
