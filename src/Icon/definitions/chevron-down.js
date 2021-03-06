import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function ChevronDown({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M12,18.52a1.24,1.24,0,0,1-.88-.36L.37,7.58a1.21,1.21,0,0,1,0-1.74,1.26,1.26,0,0,1,1.76,0L12,15.55l9.87-9.71a1.26,1.26,0,0,1,1.76,0,1.21,1.21,0,0,1,0,1.74L12.88,18.16A1.24,1.24,0,0,1,12,18.52Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default ChevronDown;
