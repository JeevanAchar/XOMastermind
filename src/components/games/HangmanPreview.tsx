import { COLORS } from "@constants/theme";
import React from "react";
import { View } from "react-native";
import Svg, { Circle, Line } from "react-native-svg";

/**
 * HangmanPreview renders a quick doodle of a smiley stick head
 * as seen in Screenshot 2.
 */
export const HangmanPreview: React.FC = () => {
  return (
    <View className="items-center justify-center">
      <Svg width="28" height="28" viewBox="0 0 28 28">
        <Circle
          cx="14"
          cy="14"
          r="10"
          stroke={COLORS.charcoalInk}
          strokeWidth="1.5"
          fill="none"
          opacity={0.65}
        />
        <Circle cx="10.5" cy="11.5" r="1" fill={COLORS.charcoalInk} opacity={0.7} />
        <Circle cx="17.5" cy="11.5" r="1" fill={COLORS.charcoalInk} opacity={0.7} />
        <Line
          x1="10"
          y1="17.5"
          x2="18"
          y2="17.5"
          stroke={COLORS.charcoalInk}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity={0.7}
        />
      </Svg>
    </View>
  );
};
