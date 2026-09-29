import { COLORS } from "@constants/theme";
import React from "react";
import { View } from "react-native";
import Svg, { Circle, Line } from "react-native-svg";

/**
 * MiniXOGridPreview – renders the authentic doodle tic-tac-toe preview box
 * seen in Screenshot 2:
 * - 3x3 charcoal grid
 * - Blue 'X' and red 'O' marks
 * - Red marker winning diagonal strike slash
 */
export const MiniXOGridPreview: React.FC = () => {
  return (
    <View
      className="my-3 h-32 w-full items-center justify-center rounded-sm border p-2"
      style={{
        backgroundColor: COLORS.white,
        borderColor: COLORS.charcoalInk,
      }}
    >
      <Svg width="180" height="110" viewBox="0 0 180 110">
        {/* Grid lines: 2 vertical, 2 horizontal */}
        <Line x1="65" y1="10" x2="65" y2="100" stroke={COLORS.charcoalInk} strokeWidth="1.8" />
        <Line x1="115" y1="10" x2="115" y2="100" stroke={COLORS.charcoalInk} strokeWidth="1.8" />
        <Line x1="20" y1="40" x2="160" y2="40" stroke={COLORS.charcoalInk} strokeWidth="1.8" />
        <Line x1="20" y1="75" x2="160" y2="75" stroke={COLORS.charcoalInk} strokeWidth="1.8" />

        {/* Row 1, Col 1: Blue 'X' */}
        <Line
          x1="33"
          y1="18"
          x2="51"
          y2="32"
          stroke={COLORS.royalBlue}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <Line
          x1="51"
          y1="18"
          x2="33"
          y2="32"
          stroke={COLORS.royalBlue}
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Row 1, Col 2: Red small 'O' */}
        <Circle cx="90" cy="25" r="7" stroke={COLORS.accentRed} strokeWidth="1.8" fill="none" />

        {/* Row 1, Col 3: Blue 'X' */}
        <Line
          x1="128"
          y1="18"
          x2="146"
          y2="32"
          stroke={COLORS.royalBlue}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <Line
          x1="146"
          y1="18"
          x2="128"
          y2="32"
          stroke={COLORS.royalBlue}
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Row 3, Col 1: Blue 'X' */}
        <Line
          x1="35"
          y1="83"
          x2="51"
          y2="97"
          stroke={COLORS.royalBlue}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <Line
          x1="51"
          y1="83"
          x2="35"
          y2="97"
          stroke={COLORS.royalBlue}
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Row 3, Col 3: Red small 'O' */}
        <Circle cx="138" cy="90" r="7" stroke={COLORS.accentRed} strokeWidth="1.8" fill="none" />

        {/* Winning Diagonal Strike: bottom-left to top-right in red pen marker slash */}
        <Line
          x1="30"
          y1="100"
          x2="152"
          y2="15"
          stroke={COLORS.marginLine}
          strokeWidth="3.6"
          strokeLinecap="round"
          opacity={0.88}
        />
      </Svg>
    </View>
  );
};
