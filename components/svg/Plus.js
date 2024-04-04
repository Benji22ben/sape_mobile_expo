import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlusSVG(props) {
    return (
        <Svg
            width={27}
            height={26}
            viewBox="0 0 27 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12.85 1v24M1.5 12.812h23.543"
                stroke="#000"
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default PlusSVG
