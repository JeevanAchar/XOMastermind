import type { RecordInfo } from "@c-types/RecordInfo";
import { COLORS } from "@constants/theme";
import { Flame } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

/**
 * Record component displaying a header, win‑streak with a fire icon, and total games played.
 */
export const RecordComponent: React.FC<{ info: RecordInfo }> = ({ info }) => {
  const { header, winStreak, gamesPlayed } = info;

  return (
    <View className="rounded-md border border-black bg-white p-3">
      <Text className="mb-2 text-lg font-semibold text-black">{header}</Text>
      <View className="mb-1 flex-row items-center">
        <Flame size={20} color={COLORS.primary} />
        <Text className="ml-1 text-base text-black">Win Streak: {winStreak}</Text>
      </View>
      <Text className="text-base text-black">Games Played: {gamesPlayed}</Text>
    </View>
  );
};
