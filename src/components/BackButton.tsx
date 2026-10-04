import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

const BackButton = () => {
  const { goBack } = useNavigation();
  return (
    <TouchableOpacity onPress={() => goBack()}>
      <Svg width={28} height={28} viewBox="0 0 24 24">
        <Path
          d="M19 12H5m7 7l-7-7 7-7"
          stroke="#FFF"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default BackButton;
