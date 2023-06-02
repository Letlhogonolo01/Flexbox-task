import React from "react";
import "./Flex.css";

const Flex = () => {
  return ( 
    <>
      <div className="flexbox-container" style={{ height: "20vh" }}>
        <div className="flexbox-item flexbox-item-1"></div>
        <div className="flexbox-item flexbox-item-2"></div>
        <div className="flexbox-item flexbox-item-3"></div>
      </div>
      <div className="flexbox-container" style={{ height: "60vh" }}>
        <div className="flexbox-item flexbox-item-4"></div>
        <div className="flexbox-item flexbox-item-5"></div>
        <div className="flexbox-item flexbox-item-6"></div>
      </div>
      <div className="flexbox-container" style={{ height: "20vh" }}>
        <div className="flexbox-item flexbox-item-7"></div>
      </div>
    </>
  );
};

export default Flex;
