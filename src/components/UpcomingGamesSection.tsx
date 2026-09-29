import type { UpcomingGamesSectionProps } from "@c-types/UpcomingGamesSectionProps";
import { ComingSoonCard } from "@components/ComingSoonCard";
import React from "react";
import { View } from "react-native";

/**
 * UpcomingGamesSection renders a responsive grid of upcoming / locked secondary games,
 * matching the 2-column layout in Screenshot 2.
 */
export const UpcomingGamesSection: React.FC<UpcomingGamesSectionProps> = ({
  games,
  className = "",
}) => {
  return (
    <View className={`my-2 w-full flex-row gap-3 ${className}`}>
      {games.map((game, index) => (
        <ComingSoonCard key={`upcoming-${index}-${game.header}`} {...game} />
      ))}
    </View>
  );
};
