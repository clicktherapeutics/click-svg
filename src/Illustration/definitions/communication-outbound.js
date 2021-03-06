import React, { Fragment } from "react";
import { View } from "react-native";
import Svg, {
  G,
  Path,
  Use,
  Defs,
  Symbol,
  Ellipse,
  Rect
} from "react-native-svg";

import { Backdrop, Blobs, Sparkles, PaperPlane } from "./shared";

function CommunicationOutbound({
  width,
  height,
  viewBox,
  preserveAspectRatio
}) {
  return (
    <Svg
      preserveAspectRatio={preserveAspectRatio || "xMidYMid meet"}
      width={width || 327}
      height={width / 1.5 || 218}
      viewBox={viewBox || "0 0 327 218"}
    >
      <Defs>
        <Backdrop />
        <Blobs />
        <Sparkles />
        <PaperPlane />
      </Defs>
      <Use width={327} height={218} xlinkHref="#backdrop" />
      <Use
        width={282.25}
        height={202.24}
        transform="translate(22.37 7.88)"
        xlinkHref="#blob7"
      />
      <Use
        width={140}
        height={130}
        transform="translate(93.5 44)"
        xlinkHref="#paper-plane"
      />
      <Use
        width={132.75}
        height={120.94}
        transform="translate(97.13 48.53)"
        xlinkHref="#sparkles"
      />
    </Svg>
  );
}

export default CommunicationOutbound;
