import { Footer } from "@components/Footer";
import { TicTacToeBoard } from "@components/games/tic-tac-toe/TicTacToeBoard";
import Header from "@components/header";
import { ReusableButton } from "@components/ReusableButton";
import { TurnIndicator } from "@components/TurnIndicator";
import { Lightbulb, Undo, XCircle } from "lucide-react-native";
import React, { useState } from "react";
import { View } from "react-native";

/**
 * PlayingGameScreen – the main UI for an active game session.
 */
export const PlayingGameScreen: React.FC = () => {
  const [isYourTurn] = useState(true);

  const handleUndo = () => {
    console.log("Undo move");
  };

  const handleHint = () => {
    console.log("Show hint");
  };

  const handleForfeit = () => {
    console.log("Player forfeits");
  };

  // apply later

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <Header title="Tic‑Tac‑Toe" subtitle="Match #1" badgeText="In‑Play" />

      {/* Turn indicator */}
      <TurnIndicator isYourTurn={isYourTurn} />

      {/* Game board */}
      <View className="my-6 items-center">
        <TicTacToeBoard />
      </View>

      {/* Action buttons */}
      <View className="mb-6 flex-row justify-around">
        <ReusableButton variant="secondary" onPress={handleUndo} Icon={Undo} className="actionBtn">
          Undo
        </ReusableButton>
        <ReusableButton
          variant="secondary"
          onPress={handleHint}
          Icon={Lightbulb}
          className="actionBtn"
        >
          Hint
        </ReusableButton>
        <ReusableButton
          variant="danger"
          onPress={handleForfeit}
          Icon={XCircle}
          className="actionBtn"
        >
          Forfeit
        </ReusableButton>
      </View>

      {/* Footer */}
      <Footer />
    </View>
  );
};
