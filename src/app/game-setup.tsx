import { GameSetupScreen } from "@/screens/GameSetupScreen";
import { useGameContext } from "@context/GameContext";
import { router } from "expo-router";
import React from "react";

/**
 * game-setup route – lets the user configure grid size, opponent, and marker.
 * Saves the chosen settings to GameContext before navigating to the playing screen.
 */
export default function GameSetupRoute() {
  const { updateSettings } = useGameContext();

  const handleBack = () => {
    router.back();
  };

  const handleStartMatch = (settings: {
    gridSize: number;
    opponent: string;
    marker: "blue" | "red";
  }) => {
    // Persist settings in global context so PlayingGameScreen can consume them
    updateSettings(settings);
    router.push("/playing");
  };

  return <GameSetupScreen onBack={handleBack} onStartMatch={handleStartMatch} />;
}
