import { TicTacToeGrid } from "@components/games/tic-tac-toe/TicTacToeGrid";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

/**
 * Simple grid size selector. Allows the user to pick a grid size (e.g., 3, 4, 5).
 */
export const SelectGrid: React.FC<{
  selectedSize: number;
  onSelect: (size: number) => void;
}> = ({ selectedSize, onSelect }) => {
  const options = [3, 4, 5];

  return (
    <View className="my-4 items-center">
      <Text className="mb-2 text-base font-semibold text-black">Select Grid</Text>
      <View className="mb-2 w-4/5 flex-row justify-around">
        {options.map((size) => (
          <TouchableOpacity
            key={size}
            onPress={() => onSelect(size)}
            className={`rounded-md border px-2 py-1 ${selectedSize === size ? "bg-primary border-primary" : "border-gray-300 bg-white"}`}
          >
            <Text className="text-black">
              {size}×{size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedSize > 0 && (
        <View className="items-center">
          <Text className="mb-1 text-sm text-black">Preview</Text>
          <TicTacToeGrid
            gridName={`${selectedSize}×${selectedSize} Grid`}
            gridSize={selectedSize}
            onCellPress={() => {}}
          />
        </View>
      )}
    </View>
  );
};
