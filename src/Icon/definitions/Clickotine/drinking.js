import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Drinking({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M13.26,6.87a5,5,0,0,0,.3,1.2H8.3l-.87-1.2Zm5.36-4.68a3.95,3.95,0,1,1-2,7.36l.23-.27h0l2.29-2.67a.73.73,0,0,0,.11-.79.73.73,0,0,0-.66-.42H14.74A4,4,0,0,1,18.62,2.19ZM16,8.07h-.81a3.92,3.92,0,0,1-.43-1.2H17ZM5.61,6.87l.87,1.2h-2l-1-1.2ZM2.45,2.52,4.54,5.4H1.82a.73.73,0,0,0-.67.42.75.75,0,0,0,.11.79L3.55,9.28l5.93,6.93v5.6H8.6a.74.74,0,1,0,0,1.47h3.24a.74.74,0,1,0,0-1.47H11v-5.6l4.74-5.53A5.41,5.41,0,1,0,13.26,5.4H6.36l-2.89-4A.74.74,0,0,0,3,1.13L.9.73A.74.74,0,0,0,0,1.32a.73.73,0,0,0,.59.85Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Drinking;
