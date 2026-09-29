import { ReactNode } from "react";
import { DimensionValue } from "react-native";

/**
 * Props for PageNote sticky card component.
 */
export interface PageNoteProps {
  /** Small title at the top */
  header: string;
  /** Main note text */
  subheader: string;
  /** Optional icon before the header */
  headerIcon?: ReactNode;
  /** Optional content below the subheader */
  children?: ReactNode;
  /** Paper background color */
  paperColor?: string;
  /** Note width */
  width?: DimensionValue;
  /** Note rotation */
  rotation?: string;
  /** Enable subtle paper wobble */
  wobble?: boolean;
  /** Optional left footer label (e.g. "Desk Mate Match #14") */
  footerLeft?: string;
  /** Optional right footer label or tally (e.g. "|||| 5 wins") */
  footerRight?: string;
}
