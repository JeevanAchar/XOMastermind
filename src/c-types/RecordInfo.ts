export interface RecordInfo {
  /**
   * Title or heading for the record section.
   */
  header: string;
  /**
   * Number of consecutive wins (win streak).
   */
  winStreak: number;
  /**
   * Total number of games played across all games.
   */
  gamesPlayed: number;
}
