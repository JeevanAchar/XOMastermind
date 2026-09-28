export interface TicTacToeGridProps {
  /**
   * Name or label for the grid (e.g., "Standard Board").
   */
  gridName: string;
  /**
   * Size of the grid (number of rows and columns). Typical Tic‑Tac‑Toe uses 3.
   */
  gridSize: number;
  /**
   * Callback when a cell is pressed. Receives the cell index (0‑based).
   */
  onCellPress?: (index: number) => void;
}
