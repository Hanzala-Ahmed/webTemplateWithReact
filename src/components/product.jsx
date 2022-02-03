import react from "react";
import reactDom from "react-dom";
import "./product.css";
import yougart from "../Images/yogurt.jpg";

function Product() {
  return (
    <section className="productMain">
      <div className="detail">
        <span className="productSpn1">NEW PRODUCT</span>
        <span className="productSpn2">The Twist Of Helthy Product</span>
        <span className="productSpn3">
          This Website has designed by <br />
          Free Website Templates <br />
          for you, for free. You can replace all this text with your own text.
        </span>
      </div>
      <div className="background">
        <img src={yougart} alt="" />
      </div>
    </section>
  );
}

export default Product;
