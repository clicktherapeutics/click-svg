import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, { Path, G } from "react-native-svg";

function Thinking({ color, width, height, viewBox, preserveAspectRatio }) {
  return (
    <Svg
      fill={color || "currentColor"}
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 24}
      height={height || 24}
      viewBox={viewBox || "0 0 24 24"}
    >
      <Path
        d="M12,.25a1,1,0,0,1,.95.86V3.5a1,1,0,0,1-1.91.09V1.2A1,1,0,0,1,12,.25ZM5.3,3.09l.07.07L7,4.78A1,1,0,0,1,5.71,6.2l-.07-.07L4,4.51A.94.94,0,0,1,4,3.16,1,1,0,0,1,5.3,3.09ZM20,3.16a1,1,0,0,1,.07,1.28L20,4.51,18.36,6.13A1,1,0,0,1,17,4.85L17,4.78l1.62-1.62A.94.94,0,0,1,20,3.16ZM1.11,9.33l.09,0,2.22.59A1,1,0,0,1,3,11.81l-.1,0-2.21-.6a1,1,0,0,1,.4-1.86ZM24,10a1,1,0,0,1-.59,1.14l-.09,0-2.21.6A1,1,0,0,1,20.49,10l.09,0,2.22-.59A1,1,0,0,1,24,10ZM4.49,16.71a1,1,0,0,1-.58,1.14l-.09,0-2.22.6A1,1,0,0,1,.43,17.8,1,1,0,0,1,1,16.66l.1,0L3.32,16A1,1,0,0,1,4.49,16.71ZM20.42,16l.1,0,2.21.59a1,1,0,0,1,.68,1.17,1,1,0,0,1-1.08.7l-.09,0L20,17.88a1,1,0,0,1,.4-1.86Zm-4.3-3.61a4.29,4.29,0,0,0-8.55-.63,4.5,4.5,0,0,0,1.51,4,4.38,4.38,0,0,1,1.31,2.78h2.75a4.69,4.69,0,0,1,1.45-2.8A4.43,4.43,0,0,0,16.12,12.41Zm-2.8,7.5H10.19a.26.26,0,0,0-.23.29.26.26,0,0,0,.23.28h3.13c.13,0,.22-.12.22-.28A.26.26,0,0,0,13.32,19.91Zm-.85,1.84H11a.72.72,0,0,0,1.43,0ZM11.8,6.35a6,6,0,0,1,3.83,10.56,3,3,0,0,0-1.12,2.23A1.35,1.35,0,0,1,14,21.55v0a2.17,2.17,0,0,1-4.34,0v0a1.37,1.37,0,0,1-1.09-1.33,1.32,1.32,0,0,1,.54-1.08A2.91,2.91,0,0,0,8,16.93,6,6,0,0,1,11.12,6.39,5.07,5.07,0,0,1,11.8,6.35Z"
        fill={color || "currentColor"}
      />
    </Svg>
  );
}

export default Thinking;
