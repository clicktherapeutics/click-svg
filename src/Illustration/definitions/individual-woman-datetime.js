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

import { Backdrop, Blobs, Calendar } from "./shared";

import { WomanPointing } from "./shared/humans";

function IndividualWomanDatetime({
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
        <Calendar />
        <WomanPointing />
      </Defs>
      <Use width={327} height={218} xlinkHref="#backdrop" />
      <Use
        width={282}
        height={205}
        transform="translate(22.5 6.5)"
        xlinkHref="#blob4"
      />
      <Use
        width={63.46}
        height={57.9}
        transform="translate(169.41 18.84)"
        xlinkHref="#calendar"
      />
      <Use
        width={94.44}
        height={165.03}
        transform="translate(91 32.67)"
        xlinkHref="#woman-pointing"
      />
    </Svg>
  );
}

export default IndividualWomanDatetime;
