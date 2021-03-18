import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function AlarmClock({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M23.05,1a3.22,3.22,0,0,0-4.57,0c-1.27,1.26,3.31,5.84,4.57,4.57A3.22,3.22,0,0,0,23.05,1ZM5.52,1A3.23,3.23,0,0,0,1,5.52C2.21,6.79,6.79,2.21,5.52,1ZM17.07,12A1.07,1.07,0,0,1,16,13H12A1.07,1.07,0,0,1,10.93,12V7a1.07,1.07,0,1,1,2.14,0v3.93H16A1.07,1.07,0,0,1,17.07,12Zm4.69,10.22-2.91-2.9A10,10,0,1,0,2,12a9.93,9.93,0,0,0,3.15,7.27l-2.91,2.9a1.09,1.09,0,0,0,0,1.52,1.09,1.09,0,0,0,1.52,0l3.11-3.12a9.92,9.92,0,0,0,10.26,0l3.11,3.12a1.09,1.09,0,0,0,1.52,0A1.09,1.09,0,0,0,21.76,22.17ZM4.14,12A7.86,7.86,0,1,1,12,19.86,7.87,7.87,0,0,1,4.14,12Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default AlarmClock;
