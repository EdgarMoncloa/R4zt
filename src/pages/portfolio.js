import React from "react";
import Header from "../components/header";
import Ruppe from "../components/rupee";


class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Ruppe color="green-rupee" text="" />
        </div>
      </div>
    );
  }
}

export default Portfolio;
