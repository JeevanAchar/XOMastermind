/**
 * Data model for game record statistics.
 */
export interface RecordInfo {
  /**
   * Title or heading for the record section (e.g. "PENCIL RECORD").
   */
  header?: string;
  /**
   * Number of consecutive wins (win streak).
   */
  winStreak: number;
  /**
   * Total number of games played across all games.
   */
  gamesPlayed: number;
  /**
   * Optional sheet label displayed on the top right (e.g. "Sheet #3").
   */
  sheetLabel?: string;
}

/**
 * Props for RecordComponent.
 */
export interface RecordComponentProps {
  /** Record info data */
  info: RecordInfo;
  /** Optional container class name */
  className?: string;
}
