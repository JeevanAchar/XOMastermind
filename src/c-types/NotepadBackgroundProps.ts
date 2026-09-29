import { ReactNode } from "react";

/**
 * Props for the reusable NotepadBackground component.
 */
export interface NotepadBackgroundProps {
  /** Page content */
  children: ReactNode;
  /** Optional additional Tailwind classes for the outer container */
  className?: string;
  /** Whether to render top binder pins (defaults to false) */
  showHeaderPins?: boolean;
  /** Whether to render red left margin line (defaults to true) */
  showMarginLine?: boolean;
  /** Whether to render left edge binder punch holes (for notebook pages) */
  showBinderHoles?: boolean;
  /** Whether to render top spiral wire rings (as in splash / loader) */
  showTopSpiralRings?: boolean;
}
