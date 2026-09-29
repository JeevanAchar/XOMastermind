import "@/global.css";
import { GameProvider } from "@context/GameContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

/**
 * RootLayout – wraps the entire app with:
 * - GameProvider: global game settings context
 * - Expo Router Stack: manages screen transitions
 */
export default function RootLayout() {
  return (
    <GameProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#020617" },
          animation: "fade",
        }}
      />
    </GameProvider>
  );
}
