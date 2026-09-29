/**
 * Supported navigation tab keys in the bottom footer.
 */
export type FooterTabKey = "play" | "pass_and_play" | "trophies" | "notebook";

export interface FooterProps {
  /** Currently active tab key */
  activeTab?: FooterTabKey;
  /** Callback fired when user selects a tab */
  onTabChange?: (tab: FooterTabKey) => void;
  /** Optional container style class */
  className?: string;
}
