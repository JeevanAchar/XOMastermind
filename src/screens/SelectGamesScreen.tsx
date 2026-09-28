import type { ActiveGame } from "@c-types/ActiveGame";
import type { ComingSoonCardProps } from "@c-types/ComingSoonCard";
import { ActiveGameCard } from "@components/ActiveGameCard";
import { ComingSoonCard } from "@components/ComingSoonCard";
import { Footer } from "@components/Footer";
import { IconButton } from "@components/IconButton";
import { NotepadBackground } from "@components/NotepadBackground";
import { RecordComponent } from "@components/RecordComponent";
import { SelectGameHeader } from "@components/SelectGameHeader";
import { TEXT } from "@constants/texts";
import { COLORS } from "@constants/theme";
import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * SelectGamesScreen – aggregates all UI pieces for the "Select Games" view.
 *
 * Styled in the graph notebook theme matching the design system:
 *   - NotepadBackground with graph paper grid and left red margin guide line.
 *   - Header with XP score and music toggle button.
 *   - SelectGameHeader with "Select Game", hand-drawn wavy marker underline,
 *     and "Pick a scrap paper to start doodling!" notebook note.
 *   - RecordComponent (shows win streak & total games).
 *   - List of active games (ActiveGameCard).
 *   - Upcoming / locked games section (ComingSoonCard).
 *   - Footer with navigation buttons.
 */
export const SelectGamesScreen: React.FC = () => {
  const [musicPaused, setMusicPaused] = useState(false);

  const activeGames: ActiveGame[] = [
    {
      isHotGame: true,
      header: "Space Adventure",
      subheader: "Explore the galaxy",
      playerCount: 4,
      imageUri: "https://example.com/space.png",
      onPlayPress: () => console.log("Play Space Adventure"),
    },
    {
      isHotGame: false,
      header: "Puzzle Quest",
      subheader: "Solve the mysteries",
      playerCount: 2,
      imageUri: "https://example.com/puzzle.png",
      onPlayPress: () => console.log("Play Puzzle Quest"),
    },
  ];

  const upcomingGames: ComingSoonCardProps[] = [
    {
      status: "coming",
      header: "Mystic Lands",
      subheader: "Coming soon",
      imageUri: "https://example.com/mystic.png",
      onPress: () => console.log("Mystic Lands tap"),
    },
    {
      status: "locked",
      header: "Secret Quest",
      subheader: "Locked – Reach level 10",
      imageUri: "https://example.com/secret.png",
      onPress: () => console.log("Secret Quest tap"),
    },
  ];

  const toggleMusic = () => setMusicPaused(!musicPaused);

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: COLORS.canvas }}>
      <NotepadBackground className="flex-1">
        <View className="flex-1 pb-2 pl-9 pr-4 pt-3">
          {/* Header Bar */}
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="font-serif text-base font-bold" style={{ color: COLORS.mascotTitle }}>
              XP: 12345
            </Text>
            <IconButton name="mic" onPress={toggleMusic} />
          </View>

          {/* Hand-drawn Select Game Header */}
          <SelectGameHeader />

          {/* Record component */}
          <RecordComponent
            info={{
              header: TEXT.PENCIL_RECORD,
              winStreak: 5,
              gamesPlayed: 42,
              sheetLabel: TEXT.DEFAULT_SHEET,
            }}
          />

          {/* Active games list */}
          <FlatList
            data={activeGames}
            keyExtractor={(_, idx) => `active-${idx}`}
            renderItem={({ item }) => <ActiveGameCard game={item} />}
            className="mt-3"
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <Text
                className="mb-2 font-serif text-lg font-bold"
                style={{ color: COLORS.mascotTitle }}
              >
                {TEXT.ACTIVE_GAMES}
              </Text>
            }
            ListFooterComponent={
              <View className="mt-3">
                <Text
                  className="mb-2 font-serif text-lg font-bold"
                  style={{ color: COLORS.mascotTitle }}
                >
                  {TEXT.UPCOMING_LOCKED_GAMES}
                </Text>
                {upcomingGames.map((g, i) => (
                  <ComingSoonCard key={`coming-${i}`} {...g} />
                ))}
              </View>
            }
          />

          {/* Footer Navigation */}
          <Footer />
        </View>
      </NotepadBackground>
    </SafeAreaView>
  );
};
