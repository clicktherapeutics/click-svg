import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Exercise({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M6.93,11.45H17.07v1.1H6.93Zm14.4-1.63h.8a.26.26,0,0,1,.27.27v3.82a.26.26,0,0,1-.27.27h-.8Zm-19.46,0h.8v4.36h-.8a.26.26,0,0,1-.27-.27V10.09A.26.26,0,0,1,1.87,9.82ZM18.93,7.91h.54a.25.25,0,0,1,.26.27v7.64a.25.25,0,0,1-.26.27h-.54a.25.25,0,0,1-.26-.27V8.18A.25.25,0,0,1,18.93,7.91Zm-14.4,0h.54a.25.25,0,0,1,.26.27v7.64a.25.25,0,0,1-.26.27H4.53a.25.25,0,0,1-.26-.27V8.18A.25.25,0,0,1,4.53,7.91Zm0-1.64A1.9,1.9,0,0,0,2.67,8.18h-.8A1.91,1.91,0,0,0,0,10.09v3.82a1.91,1.91,0,0,0,1.87,1.91h.8a1.9,1.9,0,0,0,1.86,1.91h.54a1.9,1.9,0,0,0,1.86-1.91V14.18H17.07v1.64a1.9,1.9,0,0,0,1.86,1.91h.54a1.9,1.9,0,0,0,1.86-1.91h.8A1.91,1.91,0,0,0,24,13.91V10.09a1.91,1.91,0,0,0-1.87-1.91h-.8a1.9,1.9,0,0,0-1.86-1.91h-.54a1.9,1.9,0,0,0-1.86,1.91V9.82H6.93V8.18A1.9,1.9,0,0,0,5.07,6.27Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Exercise;
