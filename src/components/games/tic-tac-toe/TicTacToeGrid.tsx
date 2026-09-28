import type { TicTacToeGridProps } from "@c-types/TicTacToeGridProps";
import { TicTacToeCell } from "@components/games/tic-tac-toe/TicTacToeCell";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

/**
 * Reusable grid component for Tic‑Tac‑Toe (or any square grid).
 *
 * Props (`TicTacToeGridProps`):
 *   - `gridName`: label displayed above the grid.
 *   - `gridSize`: number of rows/columns (e.g., 3 for classic).
 *   - `onCellPress?`: optional callback when a cell is tapped; receives the cell index.
 */
export const TicTacToeGrid: React.FC<TicTacToeGridProps> = ({
  gridName,
  gridSize,
  onCellPress,
}) => {
  const totalCells = gridSize * gridSize;

  const handlePress = (index: number) => {
    onCellPress && onCellPress(index);
  };

  return (
    <View className="my-4 items-center rounded-md border border-black bg-white p-2">
      {/* Header showing name and size */}
      <Text className="mb-1 text-lg font-semibold text-black">{gridName}</Text>
      <Text className="mb-2 text-base text-black">
        Grid Size: {gridSize} × {gridSize}
      </Text>

      {/* Grid */}
      <View style={{ width: gridSize * 60, height: gridSize * 60 }} className="flex-row flex-wrap">
        {Array.from({ length: totalCells }, (_, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => handlePress(i)}
            className="w-15 h-15 items-center justify-center border border-gray-400"
          >
            <TicTacToeCell index={i} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
