import React from "react";
import Lottie from "lottie-react";
import animationData from "../../public/Animation - 1748781328125.json";

const AboutLottie = () => (
  <div style={{ width: 340, height: 260 }}>
    <Lottie 
      animationData={animationData}
      loop
      autoplay
      style={{ width: 340, height: 260 }}
    />
  </div>
);

export default AboutLottie;
