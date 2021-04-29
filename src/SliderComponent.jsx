import React, { useState, useRef } from "react";

const pricingData = [
  { views: "10K", price: 8 },
  { views: "50K", price: 12 },
  { views: "100K", price: 16 },
  { views: "500K", price: 24 },
  { views: "1M", price: 32 },
];

const active = "#a5f3eb";
const inactive = "#eaeefb";
const minValue = 1;
const maxValue = 5;
const styleInput = {};

const SliderComponent = () => {
  const [data, setData] = useState(pricingData[0]);
  const [discount, setDiscount] = useState(false);
  const [rangeValue, setRangeValue] = useState(1);
  const inputRef = useRef();

  const handleChange = (event) => {
    const value = event.target.value;
    setData(pricingData[value - 1]);
    setRangeValue(value);

    const progress = (value - 1) * 25;
    const newBackgroundStyle = `linear-gradient(90deg, ${active} 0% ${progress}%,   ${inactive} ${progress}% 100%)`;
    inputRef.current.style.background = newBackgroundStyle;
  };

  return (
    <>
      <div className="price-box">
        <div className="pageviews">{data.views} pageviews</div>
        <div className="price">
          <span>${discount ? data.price - data.price / 4 : data.price}.00</span>{" "}
          / month
        </div>
        <div className="slider-row">
          <input
            aria-label="price-range"
            type="range"
            min={minValue}
            max={maxValue}
            defaultValue={rangeValue}
            className="slider"
            ref={inputRef}
            onChange={(e) => handleChange(e)}
            style={styleInput}
          />
        </div>
      </div>
      <div className="billing-row">
        <div className="billing-info">
          <span>Monthly billing</span>
          <input
            aria-label="monthly billing"
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
