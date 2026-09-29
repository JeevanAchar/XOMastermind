/**
 * Props for GameSetupScreen component.
 */
export interface GameSetupScreenProps {
  /** Callback to go back to Game Hub / Select Game */
  onBack?: () => void;
  /** Callback fired when the match is started */
  onStartMatch?: (settings: { gridSize: number; opponent: string; marker: "blue" | "red" }) => void;
}
