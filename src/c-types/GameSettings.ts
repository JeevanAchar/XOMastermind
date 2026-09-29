import type { MarkerColor } from "@c-types/MarkerOption";

/**
 * The configuration a user picks in GameSetupScreen before starting a match.
 * Stored in GameContext and consumed by PlayingGameScreen.
 */
export interface GameSettings {
  gridSize: number;
  opponent: string;
  marker: MarkerColor;
}
