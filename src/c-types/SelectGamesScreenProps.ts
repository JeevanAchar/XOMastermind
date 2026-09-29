/**
 * Props for SelectGamesScreen component.
 */
export interface SelectGamesScreenProps {
  /** Callback fired when user selects or plays a game */
  onSelectGame?: (gameTitle: string) => void;
  /** Optional initial music muted state */
  initialMusicMuted?: boolean;
}
