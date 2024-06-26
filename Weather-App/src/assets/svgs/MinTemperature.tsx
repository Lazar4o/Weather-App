import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Colors } from "react-native-ui-lib"

const MinTemperature = (props) => {
  return (
    <Svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path fill={Colors.yellow80} d="M12.75 6.008c0-6.246-9.5-6.246-9.5 0v13.238a6.75 6.75 0 109.5 0h-.001zM8 29.25a5.25 5.25 0 01-3.505-9.16l.005-.004.006-.012a.74.74 0 00.231-.477v-.003c.001-.014.007-.024.008-.038l.006-.029V6.007A3.085 3.085 0 018.01 2.749h-.008a3.085 3.085 0 013.249 3.266v-.008 13.52l.006.029c0 .014.006.024.008.038.016.19.101.358.23.479l.006.012a5.25 5.25 0 01-3.5 9.164zm.75-7.883V20a.75.75 0 00-1.5 0v1.367a2.75 2.75 0 101.519.005l-.019-.005zm21.781.102a.749.749 0 00-1.062 0l-4.719 4.719V4a.75.75 0 00-1.5 0v22.189l-4.719-4.721a.75.75 0 10-1.062 1.062l5.999 6a.752.752 0 00.531.219.765.765 0 00.292-.059l-.005.002c.062-.026.098-.083.149-.123.029-.021.069-.013.095-.039l6-6a.752.752 0 000-1.062z" />
    </Svg>
  )
}

export default MinTemperature
