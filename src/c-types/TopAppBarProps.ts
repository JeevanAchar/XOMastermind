/**
 * Props for the TopAppBar component used across game screens.
 */
export interface TopAppBarProps {
  /** Room or classroom tag label, e.g. "Room 4B" */
  roomTag?: string;
  /** Subtitle or doodler rank, e.g. "Doodler #18" */
  userName?: string;
  /** Star coins or XP value string, e.g. "★ 1,240" */
  stars?: string;
  /** Current mute status */
  isMuted?: boolean;
  /** Callback fired when the speaker toggle button is pressed */
  onToggleMute?: () => void;
  /** Optional container style class */
  className?: string;
}
