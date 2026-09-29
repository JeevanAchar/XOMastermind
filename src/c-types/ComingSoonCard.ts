import type { ComponentType, ReactNode } from "react";

// Type definition for ComingSoonCard component props
export interface ComingSoonCardProps {
  /**
   * Status of the card: "coming" for upcoming games, "locked" for level-locked games.
   */
  status: "coming" | "locked";
  /** Header title of the game */
  header: string;
  /** Optional sub-header or description */
  subheader?: string;
  /** Optional URI of the game image or thumbnail */
  imageUri?: string;
  /** Optional badge text override (e.g. "SOON" or "LVL 5") */
  badgeLabel?: string;
  /** Component type to render as the preview (avoids JSX in .ts files) */
  previewComponent?: ComponentType;
  /** Optional custom rendered doodle preview renderer function */
  renderPreview?: () => ReactNode;
  /** Optional press handler when the card is tapped */
  onPress?: () => void;
}
