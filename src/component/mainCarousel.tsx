import { Carousel } from "antd";
import React, { CSSProperties } from "react";

const contentStyle: CSSProperties = {
  minHeight: '420px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  top: "50%",
  left: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const MainCarousel: React.FC = () => {
  return (
    <Carousel>
      <div>
        <h3 style={contentStyle}>Find the most fitting Steam badge for your profile</h3>
      </div>
    </Carousel>
  );
}

export default MainCarousel;
