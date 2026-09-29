/**
 * Props for SplashScreen component.
 */
export interface SplashScreenProps {
  /** Optional callback fired when splash delay completes */
  onComplete?: () => void;
  /** Optional duration in milliseconds before calling onComplete (defaults to 2000ms) */
  durationMs?: number;
}
