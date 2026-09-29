import { COLORS } from "@constants/theme";
import React from "react";
import { View } from "react-native";

/**
 * DotsAndBoxesPreview renders a 3x3 doodle matrix of dots.
 */
export const DotsAndBoxesPreview: React.FC = () => {
  return (
    <View className="flex-row gap-3">
      {Array.from({ length: 3 }).map((_, col) => (
        <View key={`col-${col}`} className="gap-2">
          {Array.from({ length: 3 }).map((_, row) => (
            <View
              key={`dot-${col}-${row}`}
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: COLORS.charcoalInk, opacity: 0.6 }}
            />
          ))}
        </View>
      ))}
    </View>
  );
};
