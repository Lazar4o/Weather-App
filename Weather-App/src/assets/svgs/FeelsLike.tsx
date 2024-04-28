import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { Colors } from "react-native-ui-lib";

const FeelsLike = (props) => {
  return (
    <Svg
      fill={Colors.yellow80}
      viewBox="0 0 32 32"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G id="SVGRepo_iconCarrier">
        <Path d="M26 30h-4a2.006 2.006 0 01-2-2v-7a2.006 2.006 0 01-2-2v-6a2.946 2.946 0 013-3h6a2.946 2.946 0 013 3v6a2.006 2.006 0 01-2 2v7a2.006 2.006 0 01-2 2zm-5-18a.945.945 0 00-1 1v6h2v9h4v-9h2v-6a.945.945 0 00-1-1zM24 9a4 4 0 114-4 4.012 4.012 0 01-4 4zm0-6a2 2 0 102 2 2.006 2.006 0 00-2-2zM10 20.184V12H8v8.184a3 3 0 102 0z" />
        <Path d="M9 30a6.993 6.993 0 01-5-11.89V7a5 5 0 0110 0v11.11A6.993 6.993 0 019 30zM9 4a3.003 3.003 0 00-3 3v11.983l-.332.299a5 5 0 106.664 0L12 18.983V7a3.003 3.003 0 00-3-3z" />
        <Path
          id="_Transparent_Rectangle_"
          data-name="&lt;Transparent Rectangle&gt;"
          d="M0 0H32V32H0z"
          fill="none"
        />
      </G>
    </Svg>
  );
};

export default FeelsLike;
