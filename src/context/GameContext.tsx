import type { GameContextValue } from "@c-types/GameContextValue";
import type { GameSettings } from "@c-types/GameSettings";
import React, { createContext, useCallback, useContext, useState } from "react";

/** Default settings used before the user configures a match */
const DEFAULT_SETTINGS: GameSettings = {
  gridSize: 3,
  opponent: "Bot Buddy",
  marker: "blue",
};

const GameContext = createContext<GameContextValue | undefined>(undefined);

/**
 * GameProvider – wraps the app tree and exposes the current game settings
 * so any screen can read or update them without prop-drilling.
 */
export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<GameSettings>(DEFAULT_SETTINGS);

  const updateSettings = useCallback((next: GameSettings) => {
    setSettings(next);
  }, []);

  return (
    <GameContext.Provider value={{ settings, updateSettings }}>{children}</GameContext.Provider>
  );
};

/**
 * useGameContext – consume the global game settings.
 * Must be used inside a <GameProvider>.
 */
export const useGameContext = (): GameContextValue => {
  const ctx = useContext(GameContext);
  if (!ctx) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return ctx;
};
