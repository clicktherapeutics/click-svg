import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Community({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M19.86,7.08a1.67,1.67,0,1,0,1.67,1.67A1.67,1.67,0,0,0,19.86,7.08Zm-15.63,0A1.67,1.67,0,1,0,5.9,8.75,1.66,1.66,0,0,0,4.23,7.08Zm7.84-.79a2.36,2.36,0,1,0,2.36,2.35A2.35,2.35,0,0,0,12.07,6.29Zm7.77-.67A3.08,3.08,0,1,1,16.77,8.7,3.08,3.08,0,0,1,19.84,5.62Zm-15.62,0A3.08,3.08,0,1,1,1.14,8.7,3.08,3.08,0,0,1,4.22,5.62ZM12.07,5a3.69,3.69,0,0,1,.15,7.37h-.15A3.69,3.69,0,0,1,11.93,5Zm7.67,8.32a2.88,2.88,0,0,0-2.16,1.06,1.93,1.93,0,0,0-.52,1.08v.06l.05,0a2.75,2.75,0,0,0,.4.16l.12,0a7.86,7.86,0,0,0,2.19.25A8.16,8.16,0,0,0,22,15.66a1.51,1.51,0,0,0,.28-.1l.1,0v0a2.69,2.69,0,0,0-.47-1l-.09-.11A2.65,2.65,0,0,0,19.74,13.28Zm-15.63,0A2.91,2.91,0,0,0,2,14.34a2,2,0,0,0-.52,1.08v.06l.05,0a2.58,2.58,0,0,0,.39.16l.13,0A7.86,7.86,0,0,0,4.2,16a8.08,8.08,0,0,0,2.14-.29l.29-.1.1,0v0a2.73,2.73,0,0,0-.48-1l-.08-.11A2.68,2.68,0,0,0,4.11,13.28Zm8,.8c-2.15,0-4,1.92-3.7,3l0,0s0,0,0,0l.06,0a3.16,3.16,0,0,0,.83.31,12.13,12.13,0,0,0,2.87.28A11.87,11.87,0,0,0,15,17.38a4,4,0,0,0,.69-.25l.05,0V17c0-1.09-1.66-2.87-3.53-3Zm7.77-2c2.64,0,4.54,2.62,4.1,4.09-.34,1.13-4.63,1.49-6.88.84a2,2,0,0,1-.07.61c-.27.88-2.51,1.37-4.8,1.39H12c-2.21,0-4.39-.44-4.8-1.39A2.25,2.25,0,0,1,7,17c-2.18.61-6.36.41-6.89-.83-.69-1.64,1.45-4.09,4.09-4.09a4.41,4.41,0,0,1,3.83,2.42,5.59,5.59,0,0,1,3.86-1.79h.16a5.22,5.22,0,0,1,3.81,1.75A4.52,4.52,0,0,1,19.84,12.11Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Community;