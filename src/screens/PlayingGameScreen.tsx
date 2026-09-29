import { Footer } from "@components/Footer";
import { TicTacToeBoard } from "@components/games/tic-tac-toe/TicTacToeBoard";
import { Header } from "@components/header";
import { NotepadBackground } from "@components/NotepadBackground";
import { ReusableButton } from "@components/ReusableButton";
import { TopAppBar } from "@components/TopAppBar";
import { TurnIndicator } from "@components/TurnIndicator";
import { COLORS } from "@constants/theme";
import { useGameContext } from "@context/GameContext";
import { Lightbulb, Undo, XCircle } from "lucide-react-native";
import React, { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface PlayingGameScreenProps {
  /** Callback fired when game is finished or user exits */
  onFinish?: () => void;
  /** Callback fired when user replays match */
  onReplay?: () => void;
}

/**
 * PlayingGameScreen – the main UI for an active game session.
 * Reads game configuration (gridSize, opponent, marker) from GameContext.
 */
export const PlayingGameScreen: React.FC<PlayingGameScreenProps> = ({ onFinish }) => {
  const { settings } = useGameContext();
  const [isYourTurn] = useState(true);

  const handleUndo = () => {
    console.log("Undo move");
  };

  const handleHint = () => {
    console.log("Show hint");
  };

  const handleForfeit = () => {
    if (onFinish) {
      onFinish();
    }
  };

  // settings.gridSize, settings.opponent, settings.marker are available for board config

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: COLORS.canvas }}>
      <TopAppBar />
      <NotepadBackground className="flex-1" showBinderHoles showMarginLine>
        <View className="flex-1 px-4 pt-3">
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
            <ReusableButton
              variant="secondary"
              onPress={handleUndo}
              Icon={Undo}
              className="actionBtn"
            >
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
        </View>

        {/* Footer */}
        <Footer />
      </NotepadBackground>
    </SafeAreaView>
  );
};
