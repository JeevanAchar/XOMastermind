import type { ComingSoonCardProps } from "./ComingSoonCard";

export interface UpcomingGamesSectionProps {
  /** List of upcoming or locked games */
  games: ComingSoonCardProps[];
  /** Optional container style class */
  className?: string;
}
