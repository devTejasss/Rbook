import React from "react";
import Image from "next/image";
import { useState } from "react";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/bg.png",
    "/bookk.png",
    "/carousel2.png",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }
  return (
    <div className="Maincontainer">
      <div className="arrowContainer" style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/arrowlef.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className="wrapper" style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className="imgContainer" key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className="arrowContainer" style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/arrowrigh.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Carousel;


