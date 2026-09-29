import type { ActiveGame } from "@c-types/ActiveGame";
import { MiniXOGridPreview } from "@components/games/tic-tac-toe/MiniXOGridPreview";
import { TEXT } from "@constants/texts";

/**
 * List of available/supported games in the application.
 * Currently supported game is XO Tic-Tac-Toe.
 *
 * @param onPlayXO - Handler called when user clicks "Play Now" on XO Tic-Tac-Toe
 */
export const getAvailableGames = (onPlayXO?: () => void): ActiveGame[] => [
  {
    isHotGame: true,
    header: TEXT.XO_TITLE,
    subheader: TEXT.XO_SUBTITLE,
    playerCount: 2,
    previewComponent: MiniXOGridPreview,
    onPlayPress: onPlayXO,
  },
];
