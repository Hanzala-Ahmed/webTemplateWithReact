import react from "react";
import reactDom from "react-dom";
import "./freezeDelight.css";
import background from "../Images/bg-home.jpg";
import delight from "../Images/Freeze Delight.png"

function FreezeDelight() {
  return (
    <section className="main">
      <div className="background">
        <img src={background} alt="" />
      </div>
      <div className="delight">
          <img src={delight} alt="" />
          <span>Freeze Delight
          </span>
      </div>
    </section>
  );
}

export default FreezeDelight;
