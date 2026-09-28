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
   * Image URI (local asset or remote URL) representing the game visual.
   */
  imageUri: string;
  /**
   * Callback invoked when the "Play Now" button is pressed.
   */
  onPlayPress?: () => void;
}
