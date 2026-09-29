import { InitialLoadingScreen } from "@components/loading/InitialLoadingScreen";
import { router } from "expo-router";
import React from "react";

/**
 * /loading route – shows the animated pencil-sharpening loader.
 * Navigates to the game hub once loading completes.
 */
export default function LoadingRoute() {
  const handleComplete = () => {
    router.replace("/select-game");
  };

  return <InitialLoadingScreen onComplete={handleComplete} />;
}
