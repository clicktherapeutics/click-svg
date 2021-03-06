import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Camera({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M12.08,8a5,5,0,1,0,5.07,5A5,5,0,0,0,12.08,8Zm0,2a3,3,0,1,1-2.94,3A3,3,0,0,1,12.08,10Zm9.78,9.62H2.14v-13H21.86ZM23.07,4.36l-.14,0H10.29V3.19A1.13,1.13,0,0,0,9.35,2h-5a1.13,1.13,0,0,0-.93,1.15V4.34H1.07l-.14,0A1.12,1.12,0,0,0,0,5.5V20.81A1.12,1.12,0,0,0,1.07,22H22.93a1.06,1.06,0,0,0,.89-.51h0a.35.35,0,0,0,.05-.08h0a1.24,1.24,0,0,0,.13-.55V5.5A1.12,1.12,0,0,0,23.07,4.36Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Camera;
