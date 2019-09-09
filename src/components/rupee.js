import React from "react";
import "../styles/rupee.css";

class Ruppe extends React.Component {
  render() {
    return (
      <div className="rupee green-rupee">
        <div className={["rupee-face front", this.props.color].join(" ")}>
          <div className="face">
            <div className="hex-top" />
            <div className="hex-middle" />
            <div className="hex-botton" />
          </div>
          <div className="part-top">
            <div className="trap trap-top-right" />
            <div className="trap trap-top-left" />
          </div>
          <div className="part-bottom">
            <div className="trap trap-top-right" />
            <div className="trap trap-top-left" />
          </div>
          <div className="part-left" />
          <div className="part-right" />
        </div>
        <div className={["rupee-face back", this.props.color].join(" ")}>
          <div className="face">
            <div className="hex-top" />
            <div className="hex-middle" />
            <div className="hex-botton" />
          </div>
          <div className="part-top">
            <div className="trap trap-top-right" />
            <div className="trap trap-top-left" />
          </div>
          <div className="part-bottom">
            <div className="trap trap-top-right" />
            <div className="trap trap-top-left" />
          </div>
          <div className="part-left" />
          <div className="part-right" />
        </div>
      </div>
    );
  }
}
export default Ruppe;
