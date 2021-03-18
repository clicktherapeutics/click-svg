import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Thinking({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M9.07,11.79a1,1,0,0,1,1.38.5,1,1,0,1,1-1.38-.5ZM22.43,5.18a.7.7,0,0,1,.92.33l.58,1.26a.68.68,0,0,1-.33.92L21.09,8.86,19.91,6.35ZM16.9,8.09l-5,2.35.91,2,5-2.34ZM19,5.64a.54.54,0,0,1,.72.26l1.6,3.42A.55.55,0,0,1,21,10l-19,8.85-2-4.4Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Thinking;
