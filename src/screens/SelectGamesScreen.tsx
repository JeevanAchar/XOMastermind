import type { SelectGamesScreenProps } from "@c-types/SelectGamesScreenProps";
import { ActiveGameCard } from "@components/ActiveGameCard";
import { Footer } from "@components/Footer";
import { NotepadBackground } from "@components/NotepadBackground";
import { RecordComponent } from "@components/RecordComponent";
import { SelectGameHeader } from "@components/SelectGameHeader";
import { TopAppBar } from "@components/TopAppBar";
import { UpcomingGamesSection } from "@components/UpcomingGamesSection";
import { getAvailableGames } from "@constants/availableGames";
import { TEXT } from "@constants/texts";
import { COLORS } from "@constants/theme";
import { UPCOMING_GAMES } from "@constants/upcomingGames";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * SelectGamesScreen – aggregates all UI pieces for the Game Hub matching Screenshot 2:
 * - NotepadBackground with warm parchment base, graph grid, red left margin line,
 *   and authentic left binder punch holes.
 * - TopAppBar with hanging paperclip, Room 4B avatar, ★ 1,240 coin pill, and sound toggle.
 * - SelectGameHeader with "Select Game" heading and hand-drawn wavy marker underline.
 * - RecordComponent displaying win streak and total games tallies on a yellow sticky note.
 * - Featured ActiveGameCard displaying XO Tic-Tac-Toe with mini grid doodle and PLAY NOW CTA.
 * - UpcomingGamesSection displaying secondary upcoming/locked games in a 2-column layout.
 * - Bottom Footer navigation bar.
 */
export const SelectGamesScreen: React.FC<SelectGamesScreenProps> = ({
  onSelectGame,
  initialMusicMuted = false,
}) => {
  const [isMusicMuted, setIsMusicMuted] = useState(initialMusicMuted);

  const toggleMusic = () => {
    setIsMusicMuted((prev) => !prev);
  };

  const handlePlayXO = () => {
    if (onSelectGame) {
      onSelectGame(TEXT.XO_TITLE);
    }
  };

  const availableGames = getAvailableGames(handlePlayXO);

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: COLORS.canvas }}>
      {/* Top Application Bar */}
      <TopAppBar
        roomTag={TEXT.ROOM_4B}
        userName={TEXT.DOODLER_18}
        stars={TEXT.DEFAULT_STARS}
        isMuted={isMusicMuted}
        onToggleMute={toggleMusic}
      />

      {/* Main Notebook Sheet */}
      <NotepadBackground className="flex-1" showBinderHoles showMarginLine>
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingLeft: 38,
            paddingRight: 16,
            paddingTop: 12,
            paddingBottom: 16,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Hand-drawn Select Game Header */}
          <SelectGameHeader />

          {/* Pencil Record Sticky Note */}
          <RecordComponent
            info={{
              header: TEXT.PENCIL_RECORD,
              winStreak: 5,
              gamesPlayed: 42,
              sheetLabel: TEXT.DEFAULT_SHEET,
            }}
          />

          {/* Available / Featured Games List */}
          {availableGames.map((game, index) => (
            <ActiveGameCard key={`game-${index}-${game.header}`} game={game} />
          ))}

          {/* Upcoming & Locked Games 2-Column Section */}
          <UpcomingGamesSection games={UPCOMING_GAMES} />
        </ScrollView>

        {/* Footer Navigation Bar */}
        <Footer />
      </NotepadBackground>
    </SafeAreaView>
  );
};
