import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function NRTPatch({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M9,9.11a1.16,1.16,0,1,0,1.16,1.16A1.15,1.15,0,0,0,9,9.11Zm6.05,0a1.16,1.16,0,1,0,1.16,1.16A1.15,1.15,0,0,0,15,9.11Zm0,4.37a1.16,1.16,0,0,0,0,2.31,1.16,1.16,0,1,0,0-2.31ZM9,13.48a1.16,1.16,0,0,0,0,2.31,1.16,1.16,0,1,0,0-2.31ZM6.48,6h11A1.48,1.48,0,0,1,19,7.48v10A1.48,1.48,0,0,1,17.52,19h-11A1.48,1.48,0,0,1,5,17.52v-10A1.48,1.48,0,0,1,6.48,6ZM3,2.5v19a.5.5,0,0,0,.5.5h17a.51.51,0,0,0,.5-.5V2.5a.51.51,0,0,0-.5-.5H3.5A.5.5,0,0,0,3,2.5ZM20.94,0A2.25,2.25,0,0,1,23,2.4V21.6A2.25,2.25,0,0,1,20.94,24H3.06A2.25,2.25,0,0,1,1,21.6V2.4A2.25,2.25,0,0,1,3.06,0Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default NRTPatch;
