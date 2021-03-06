import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Star_Hollow({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M3.38,10.3l3.91,3.8a1.07,1.07,0,0,1,.31,1l-.93,5.36,4.83-2.53a1,1,0,0,1,1,0l4.83,2.53-.93-5.36a1.07,1.07,0,0,1,.31-1l3.91-3.8-5.4-.78a1.08,1.08,0,0,1-.81-.59L12,4.05,9.59,8.93a1.08,1.08,0,0,1-.81.59ZM18.75,23.43a1.11,1.11,0,0,1-.5-.12L12,20,5.75,23.31a1.07,1.07,0,0,1-1.13-.08,1.06,1.06,0,0,1-.42-1.05l1.19-6.94L.33,10.32A1.06,1.06,0,0,1,.93,8.5l7-1L11,1.16a1.08,1.08,0,0,1,1.92,0l3.13,6.32,7,1a1.06,1.06,0,0,1,.6,1.82l-5.06,4.92,1.19,6.89a1.79,1.79,0,0,1,0,.23,1.07,1.07,0,0,1-1.07,1.07Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Star_Hollow;
