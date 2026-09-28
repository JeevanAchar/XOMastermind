import type { MarkerColor } from "@c-types/MarkerOption";
import { COLORS } from "@constants/theme";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

/**
 * Simple marker picker – user can choose between blue and red.
 * Props:
 *   - selected: currently selected color.
 *   - onSelect: callback when a color is chosen.
 */
export const PickYourMarker: React.FC<{
  selected: MarkerColor;
  onSelect: (color: MarkerColor) => void;
}> = ({ selected, onSelect }) => {
  const options: MarkerColor[] = ["blue", "red"];

  return (
    <View className="my-3 items-center">
      <Text className="mb-2 text-base font-semibold text-black">Pick Your Marker</Text>
      <View className="w-30 flex-row justify-between">
        {options.map((color) => (
          <TouchableOpacity
            key={color}
            // Dynamic background color based on marker
            style={[
              { backgroundColor: COLORS[color] },
              selected === color && { borderColor: COLORS.primary, borderWidth: 3 },
            ]}
            className="h-10 w-10 rounded-sm border-2 border-white"
            onPress={() => onSelect(color)}
          />
        ))}
      </View>
    </View>
  );
};
