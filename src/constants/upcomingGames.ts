import type { ComingSoonCardProps } from "@c-types/ComingSoonCard";
import { DotsAndBoxesPreview } from "@components/games/DotsAndBoxesPreview";
import { HangmanPreview } from "@components/games/HangmanPreview";
import { TEXT } from "@constants/texts";

/**
 * List of upcoming and locked games in the application.
 */
export const UPCOMING_GAMES: ComingSoonCardProps[] = [
  {
    status: "coming",
    header: TEXT.DOTS_BOXES_TITLE,
    subheader: TEXT.DOTS_BOXES_SUBTITLE,
    badgeLabel: TEXT.SOON_BADGE,
    previewComponent: DotsAndBoxesPreview,
  },
  {
    status: "locked",
    header: TEXT.HANGMAN_TITLE,
    subheader: TEXT.HANGMAN_SUBTITLE,
    badgeLabel: TEXT.LVL_5_BADGE,
    previewComponent: HangmanPreview,
  },
];
