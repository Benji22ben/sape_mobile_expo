import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function HomeSVG(props) {
    return (
        <Svg
            width={29}
            height={26}
            viewBox="0 0 29 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_1074_1153)">
                <Path
                    d="M20.548 8.943l-6.632-6.429L3.468 12.643H5.81V24.07h4.42V15.5h7.37v8.571h4.42V12.643h2.343l-2.343-2.272V5.5h-1.473v3.443zM-.084 14.07L13.916.5l5.158 5V4.071h4.421v5.715l4.421 4.285h-4.421V25.5h-7.369v-8.571h-4.42V25.5H4.337V14.071H-.084z"
                    fill="#000"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1074_1153">
                    <Path fill="#fff" transform="translate(.5 .5)" d="M0 0H28V25H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default HomeSVG
