import * as React from "react"
import Svg, { Path } from "react-native-svg"

function TeeSVG(props) {
    return (
        <Svg
            width={33}
            height={24}
            viewBox="0 0 33 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M8.182 1h4.159s0 4.125 4.159 4.125S20.659 1 20.659 1h4.159m0 9.625v11.55a.822.822 0 01-.244.583.835.835 0 01-.588.242H9.014a.835.835 0 01-.588-.242.822.822 0 01-.244-.583v-11.55M24.818 1l6.16 2.443c.204.082.368.24.455.442.087.2.09.428.007.63l-2.254 5.592a.826.826 0 01-.772.518h-3.596M8.182 1l-6.16 2.443a.819.819 0 00-.463 1.073l2.255 5.59a.826.826 0 00.772.519h3.596"
                stroke="#000"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default TeeSVG