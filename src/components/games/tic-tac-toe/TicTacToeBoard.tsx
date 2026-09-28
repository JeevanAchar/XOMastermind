import React from "react";
import { View } from "react-native";
import { TicTacToeCell } from "./TicTacToeCell";

/**
 * Placeholder board for Tic‑Tac‑Toe.
 *
 * In a full implementation this would manage game state, turn handling,
 * win detection, etc. Here it simply renders a 3×3 grid of cells.
 */
export const TicTacToeBoard: React.FC = () => {
  const cells = Array.from({ length: 9 }, (_, i) => i);

  return (
    <View className="h-44 w-44 flex-row flex-wrap rounded-md border-2 border-black bg-white">
      {cells.map((idx) => (
        <TicTacToeCell key={idx} index={idx} />
      ))}
    </View>
  );
};
