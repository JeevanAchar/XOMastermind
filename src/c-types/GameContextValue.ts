import type { GameSettings } from "@c-types/GameSettings";

/**
 * Shape of the value exposed by GameContext.
 */
export interface GameContextValue {
  /** The currently configured game settings */
  settings: GameSettings;
  /** Replace the current settings with a new configuration */
  updateSettings: (next: GameSettings) => void;
}
