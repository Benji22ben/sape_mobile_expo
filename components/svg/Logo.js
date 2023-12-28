import React from "react";
import Svg, { Path } from "react-native-svg";
const Logo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={96}
    fill="none"
    {...props}
  >
    <Path
      stroke="#202020"
      strokeWidth={2}
      d="M25 1h22v22H25zM1 25h22v22H1zM25 49h22v22H25zM1 73h22v22H1z"
    />
  </Svg>
);
export default Logo;
