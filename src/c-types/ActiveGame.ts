import type { ComponentType, ReactNode } from "react";

export interface ActiveGame {
  /**
   * Marks if the game is currently a hot/featured game.
   */
  isHotGame: boolean;
  /**
   * Main title of the game.
   */
  header: string;
  /**
   * Optional subtitle or description.
   */
  subheader?: string;
  /**
   * Number of players that can join/play the game.
   */
  playerCount: number;
  /**
   * Optional image URI representing the game thumbnail.
   */
  imageUri?: string;
  /**
   * Component type to render as the game preview (avoids JSX in .ts files).
   */
  previewComponent?: ComponentType;
  /**
   * Optional custom interactive / doodle preview renderer function.
   */
  renderPreview?: () => ReactNode;
  /**
   * Callback invoked when the "Play Now" button is pressed.
   */
  onPlayPress?: () => void;
}
