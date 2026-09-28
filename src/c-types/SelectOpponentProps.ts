export interface SelectOpponentProps {
  /** Icon component (e.g., from lucide-react-native) */
  Icon: React.ReactNode;
  /** Main title */
  header: string;
  /** Optional sub‑title */
  subheader?: string;
  /** Whether this opponent row is currently active/selected */
  isActive: boolean;
  /** List of difficulty levels – defaults to ['Easy','Medium','Hard'] */
  levels?: string[];
  /** Currently selected difficulty level */
  selectedLevel?: string;
  /** Callback when a level is selected */
  onLevelSelect: (level: string) => void;
}
