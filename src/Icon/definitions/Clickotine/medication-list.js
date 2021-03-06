import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function MedicationList({
  color,
  width,
  height,
  viewBox,
  preserveAspectRatio
}) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M11,10.82a.76.76,0,0,1,0,1.51H3.66a.76.76,0,0,1,0-1.51Zm0,2.87a.77.77,0,0,1,0,1.52H3.66a.77.77,0,0,1,0-1.52Zm7.35-5.62-3,3.07,3.36,3.34a2.11,2.11,0,0,0,3.1.14l0,0a2.17,2.17,0,0,0-.11-3.18ZM11,16.57a.76.76,0,0,1,0,1.51H3.66a.76.76,0,0,1,0-1.51Zm-.11-7.71H1.65v11h11.4V11Zm4.63-5.5L23,10.7a3.5,3.5,0,0,1,0,5l0,0a3.65,3.65,0,0,1-5.09,0l-3.21-3.15v8.37a.72.72,0,0,1-.58.75H.65A.71.71,0,0,1,0,20.93v-13a.73.73,0,0,1,.59-.76h9a3.52,3.52,0,0,1,.81-3.8A3.65,3.65,0,0,1,15.5,3.36Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default MedicationList;
