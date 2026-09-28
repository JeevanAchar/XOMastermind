import type { SelectGameHeaderProps } from "@c-types/SelectGameHeaderProps";
import { TEXT } from "@constants/texts";
import { COLORS } from "@constants/theme";
import React from "react";
import { Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

/**
 * SelectGameHeader renders the title section for the game selection view:
 * - "Select Game" in deep navy bold serif typography
 * - Hand-drawn wavy marker red underline with layered sketch strokes
 * - "Pick a scrap paper to start doodling!" notebook subtitle
 */
export const SelectGameHeader: React.FC<SelectGameHeaderProps> = ({
  title = TEXT.SELECT_GAME,
  subtitle = TEXT.PICK_SCRAP_PAPER,
  className = "",
}) => {
  return (
    <View className={`mb-4 ${className}`}>
      {/* Title and hand-drawn wavy underline container */}
      <View className="self-start">
        <Text
          className="font-serif text-3xl font-bold tracking-tight"
          style={{ color: COLORS.mascotTitle }}
        >
          {title}
        </Text>

        {/* Hand-drawn red wavy doodle underline */}
        <Svg
          width="190"
          height="14"
          viewBox="0 0 190 14"
          className="mt-0.5"
          style={{ overflow: "visible" }}
        >
          {/* Main marker wavy stroke */}
          <Path
            d="M 3 6 C 30 2, 70 3, 110 7 C 145 10, 165 6, 186 4"
            fill="none"
            stroke={COLORS.underlineRed}
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Secondary sketched stroke for authentic hand-drawn feel */}
          <Path
            d="M 8 9 C 38 6, 80 6, 120 10 C 150 12, 172 8, 182 6"
            fill="none"
            stroke={COLORS.underlineRed}
            strokeWidth="2"
            strokeLinecap="round"
            opacity={0.65}
          />
        </Svg>
      </View>

      {/* Subtitle */}
      <Text
        className="mt-1.5 font-serif text-[17px] leading-6"
        style={{ color: COLORS.subtitleText }}
      >
        {subtitle}
      </Text>
    </View>
  );
};
