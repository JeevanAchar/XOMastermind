import React from "react";
import { Text, View } from "react-native";

/**
 * TurnIndicator – shows whose turn it is.
 * Props:
 *   isYourTurn – when true display "Your Turn", otherwise "Opponent's Turn".
 */
export const TurnIndicator: React.FC<{ isYourTurn: boolean }> = ({ isYourTurn }) => {
  return (
    <View className="mb-4 items-center rounded-md bg-white py-2">
      <Text className={`text-base font-semibold ${isYourTurn ? "text-blue-500" : "text-red-500"}`}>
        {isYourTurn ? "Your Turn" : "Opponent's Turn"}
      </Text>
    </View>
  );
};
