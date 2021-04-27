import React, { useState } from "react";

const pricingData = [
  { views: "10K", price: 8 },
  { views: "50K", price: 12 },
  { views: "100K", price: 16 },
  { views: "500K", price: 24 },
  { views: "1M", price: 32 },
];

document.querySelectorAll(".slider").forEach(function (el) {
  el.oninput = function () {
    const valPercent =
      (el.valueAsNumber - parseInt(el.min)) /
      (parseInt(el.max) - parseInt(el.min));
    const style =
      "background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(" +
      valPercent +
      ", #a5f3eb), color-stop(" +
      valPercent +
      ", #eaeefb));";
    el.style = style;
  };
  el.oninput();
});

const SliderComponent = () => {
  const [data, setData] = useState(pricingData[0]);
  const [discount, setDiscount] = useState(false);
  return (
    <>
      <div className="price-box">
        <div className="pageviews">{data.views} pageviews</div>
        <div className="price">
          <span>${discount ? data.price / 4 : data.price}.00</span> / month
        </div>
        <div className="slider-row">
          <input
            type="range"
            min="1"
            max="5"
            defaultValue={1}
            className="slider"
            onChange={(e) => setData(pricingData[e.target.value - 1])}
          />
        </div>
      </div>
      <div className="billing-row">
        <div className="billing-info">
          <span>Monthly billing</span>
          <input
            className="check"
            type="checkbox"
            onChange={(e) => setDiscount(e.target.checked)}
          />
          <div className="switch-box">
            <label className="switch"></label>
          </div>
        </div>
        <div className="billing-info">
          <span>Yearly billing</span>
          <div className="discount">
            -25%<span className="discount-text"> discount</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderComponent;
