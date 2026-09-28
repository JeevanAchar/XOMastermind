import { IconButton } from "@/components/IconButton";
import type { ActiveGame } from "@c-types/ActiveGame";
import type { ComingSoonCardProps } from "@c-types/ComingSoonCard";
import { ActiveGameCard } from "@components/ActiveGameCard";
import { ComingSoonCard } from "@components/ComingSoonCard";
import { Footer } from "@components/Footer";
import { RecordComponent } from "@components/RecordComponent";
import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";

/**
 * SelectGamesScreen – aggregates all UI pieces for the "Select Games" view.
 *
 * Layout (top‑to‑bottom):
 *   1. Header with XP score and music toggle.
 *   2. Main title "Select Games" and a sub‑header.
 *   3. RecordComponent (shows win streak & total games).
 *   4. List of active games (ActiveGameCard).
 *   5. Section for upcoming / locked games (ComingSoonCard).
 *   6. Footer with navigation buttons.
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
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-base font-semibold text-black">XP: 12345</Text>
        <IconButton name="mic" onPress={toggleMusic} />
      </View>

      {/* Main titles */}
      <Text className="mb-2 text-2xl font-bold text-black">Select Games</Text>
      <Text className="mb-3 text-base text-black">Choose your adventure</Text>

      {/* Record component */}
      <RecordComponent info={{ header: "Your Record", winStreak: 5, gamesPlayed: 27 }} />

      {/* Active games list */}
      <FlatList
        data={activeGames}
        keyExtractor={(_, idx) => `active-${idx}`}
        renderItem={({ item }) => <ActiveGameCard game={item} />}
        className="mt-4"
        ListHeaderComponent={
          <Text className="mb-2 text-lg font-semibold text-black">Active Games</Text>
        }
      />

      {/* Upcoming / Locked games */}
      <View className="mt-4">
        <Text className="mb-2 text-lg font-semibold text-black">Upcoming & Locked Games</Text>
        {upcomingGames.map((g, i) => (
          <ComingSoonCard key={`coming-${i}`} {...g} />
        ))}
      </View>

      {/* Footer */}
      <Footer />
    </View>
  );
};
