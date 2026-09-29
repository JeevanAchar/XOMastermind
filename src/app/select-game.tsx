import { SelectGamesScreen } from "@/screens/SelectGamesScreen";
import { router } from "expo-router";
import React from "react";

/**
 * /select-game route – the Game Hub where the user picks a game to play.
 * On selection, navigates forward to the game setup screen.
 */
export default function SelectGameRoute() {
  const handleSelectGame = () => {
    router.push("/game-setup");
  };

  return <SelectGamesScreen onSelectGame={handleSelectGame} />;
}
