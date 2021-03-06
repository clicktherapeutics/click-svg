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

import { Backdrop, Blobs, Star, Trophy, Wreath } from "./shared";

function MilestoneTrophy({ width, height, viewBox, preserveAspectRatio }) {
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
        <Wreath />
        <Trophy />
        <Star />
      </Defs>
      <Use width={327} height={218} xlinkHref="#backdrop" />
      <Use
        width={255.4}
        height={211.93}
        transform="translate(35.8 3.04)"
        xlinkHref="#blob8"
      />
      <Use
        width={100.38}
        height={120}
        transform="translate(113.31 49)"
        xlinkHref="#trophy"
      />
      <Use
        width={179.99}
        height={92.01}
        transform="translate(73.5 63)"
        xlinkHref="#wreath"
      />
      <Use
        width={9.53}
        height={8.69}
        transform="matrix(2.52 0 0 2.52 151.5 73)"
        xlinkHref="#star"
      />
    </Svg>
  );
}

export default MilestoneTrophy;
