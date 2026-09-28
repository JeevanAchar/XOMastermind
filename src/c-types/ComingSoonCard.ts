// Type definition for ComingSoonCard component props
export interface ComingSoonCardProps {
  /**
   * Status of the card. "coming" for upcoming games, "locked" for unavailable games.
   */
  status: "coming" | "locked";
  /** Header title of the game */
  header: string;
  /** Optional sub‑header or description */
  subheader?: string;
  /** URI of the game image or thumbnail */
  imageUri: string;
  /** Optional press handler when the card is tapped */
  onPress?: () => void;
}
