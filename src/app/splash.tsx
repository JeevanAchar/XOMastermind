import { SplashScreen } from "@/screens/SplashScreen";
import { router } from "expo-router";
import React from "react";

/**
 * /splash route – shows the paper-themed opening splash for 2 seconds,
 * then navigates to the loading screen.
 */
export default function SplashRoute() {
  const handleComplete = () => {
    router.replace("/loading");
  };

  return <SplashScreen durationMs={2000} onComplete={handleComplete} />;
}
