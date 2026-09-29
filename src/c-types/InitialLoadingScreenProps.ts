/**
 * Props for the InitialLoadingScreen component.
 */
export interface InitialLoadingScreenProps {
  /** Progress value (0-100). If omitted, an authentic auto-progression will run. */
  progress?: number;
  /** Optional custom header text above the progress bar */
  header?: string;
  /** Show numeric percentage next to the bar */
  showPercentage?: boolean;
  /** Whether the page block should appear pinned */
  pinned?: boolean;
  /** Callback fired when loading reaches 100% */
  onComplete?: () => void;
}
