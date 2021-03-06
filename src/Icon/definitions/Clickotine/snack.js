import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Snack({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M12,2A5.06,5.06,0,0,0,6.87,7v9H17.13V12.87A4,4,0,0,1,14.05,9a3.86,3.86,0,0,1,.56-2,3.86,3.86,0,0,1,.14-4.22A5.24,5.24,0,0,0,12,2Zm1,16H11v3a1,1,0,0,0,2,0ZM12,0a7.25,7.25,0,0,1,5,1.94,1,1,0,0,1-.07,1.51,1.93,1.93,0,0,0-.25,2.88,1,1,0,0,1,0,1.34A2,2,0,0,0,16.11,9a2,2,0,0,0,2.05,2,1,1,0,0,1,1,1v5a1,1,0,0,1-1,1H15.08v3a3,3,0,0,1-2.94,3H12a3,3,0,0,1-3.08-3V18H5.84a1,1,0,0,1-1-.91V7A7.09,7.09,0,0,1,12,0Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Snack;
