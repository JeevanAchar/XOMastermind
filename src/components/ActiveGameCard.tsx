import type { ActiveGame } from "@c-types/ActiveGame";
import { ReusableButton } from "@components/ReusableButton";
import { COLORS } from "@constants/theme";
import React from "react";
import { Image, Text, View } from "react-native";

/**
 * Reusable card displaying an active game.
 *
 * Props are defined by the `ActiveGame` interface:
 *  - `isHotGame` – highlight the card when true.
 *  - `header` – main title.
 *  - `subheader` – optional subtitle/description.
 *  - `playerCount` – number of players that can join.
 *  - `imageUri` – image source for the game thumbnail.
 *  - `onPlayPress` – callback for the **Play Now** button.
 */
export const ActiveGameCard: React.FC<{ game: ActiveGame }> = ({ game }) => {
  const { isHotGame, header, subheader, playerCount, imageUri, onPlayPress } = game;

  return (
    <View
      style={{ backgroundColor: COLORS.paper, borderColor: COLORS.gray, borderWidth: 1 }}
      className={
        "mb-4 flex-row items-center rounded-lg p-3 " +
        (isHotGame ? "border-2 border-primary-500" : "")
      }
    >
      <Image
        source={{ uri: imageUri }}
        className="mr-3 h-20 w-20 rounded-sm"
        // NativeWind also supports style prop for fixed size, but className maps to Tailwind spacing
      />
      <View className="flex-1">
        <Text className="text-lg font-semibold text-black">{header}</Text>
        {subheader ? <Text className="mt-1 text-base text-black">{subheader}</Text> : null}
        <Text className="my-1 text-sm text-black">Players: {playerCount}</Text>
        <ReusableButton variant="default" onPress={onPlayPress} className="playNowBtn">
          Play Now
        </ReusableButton>
      </View>
    </View>
  );
};
