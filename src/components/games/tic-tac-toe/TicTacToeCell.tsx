import React from "react";
import { Text, View } from "react-native";

type TicTacToeCellProps = {
  /** Index of the cell in the grid (0‑based). Used for identification. */
  index: number;
};

/**
 * Simple placeholder cell for the Tic‑Tac‑Toe board.
 * It displays the index number for debugging; in a full implementation it would
 * render X/O symbols based on game state.
 */
export const TicTacToeCell: React.FC<TicTacToeCellProps> = ({ index }) => {
  return (
    <View className="w-15 h-15 items-center justify-center rounded-sm border border-gray-400 bg-white">
      {/* Placeholder – show index */}
      <Text className="text-lg font-semibold text-black">{index + 1}</Text>
    </View>
  );
};
