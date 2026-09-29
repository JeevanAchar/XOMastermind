import { PlayingGameScreen } from "@/screens/PlayingGameScreen";
import { router } from "expo-router";
import React from "react";

/**
 * /playing route – the active match screen.
 * - onFinish: replaces the entire back-stack and returns to the Game Hub.
 * - onReplay: replaces the current route with a fresh /playing instance,
 *   restarting the game without adding extra history entries.
 */
export default function PlayingRoute() {
  const handleFinish = () => {
    router.replace("/select-game");
  };

  const handleReplay = () => {
    // Replace current playing screen to reset game state cleanly
    router.replace("/playing");
  };

  return <PlayingGameScreen onFinish={handleFinish} onReplay={handleReplay} />;
}
