import react from "react";
import reactDom from "react-dom";
import "./footer.css";
import stroyImg from "../Images/Our Story.png";
import flavorImg from "../Images/Flavours.png";
import locationImg from "../Images/Our Location.png";
import productImg from "../Images/Products.png";

function Footer() {
  return (
  <section className="footerMain">
      <div className="footerProduct">
          <img src={productImg} alt="" />
          <span>PRODUCTS</span>
      </div>
      <div className="footerStory">
          <img src={stroyImg} alt="" />
          <span>OUR STORY</span>
      </div>
      <div className="footerFlavor">
          <img src={flavorImg} alt="" />
          <span>FLAVORS</span>
      </div>
      <div className="footerlocation">
          <img src={locationImg} alt="" />
          <span>OUR LOCATION</span>
      </div>
  </section>
  );
}

export default Footer;
