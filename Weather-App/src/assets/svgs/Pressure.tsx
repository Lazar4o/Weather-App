import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
import { Colors } from "react-native-ui-lib"

const Pressure = (props) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fill={Colors.yellow80}>
        <Path d="M12 9a1 1 0 00-1 1v5.268A2 2 0 0012 19a2 2 0 001-3.732V10a1 1 0 00-1-1zM11 6a1 1 0 112 0 1 1 0 01-2 0zM16 7a1 1 0 100 2 1 1 0 000-2zM6 13a1 1 0 110-2 1 1 0 010 2zM7 8a1 1 0 102 0 1 1 0 00-2 0zM18 13a1 1 0 110-2 1 1 0 010 2z" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zm0-2.007a8.993 8.993 0 110-17.986 8.993 8.993 0 010 17.986z"
        />
      </G>
    </Svg>
  )
}

export default Pressure
