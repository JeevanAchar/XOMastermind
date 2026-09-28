import type { SelectOpponentProps } from "@c-types/SelectOpponentProps";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

/**
 * Reusable opponent selection component.
 * Displays an icon, header, optional subheader, and difficulty level buttons.
 */
export const SelectOpponent: React.FC<SelectOpponentProps> = ({
  Icon,
  header,
  subheader,
  isActive,
  levels = ["Easy", "Medium", "Hard"],
  selectedLevel,
  onLevelSelect,
}) => {
  const containerClasses = `p-4 rounded-md border ${isActive ? "bg-primary border-primary" : "bg-white border-black"}`;

  return (
    <View className={containerClasses}>
      {/* Top row with icon and texts */}
      <View className="mb-2 flex-row items-center">
        <View className="mr-2">{Icon}</View>
        <View className="flex-1">
          <Text className={`text-base font-semibold ${isActive ? "text-white" : "text-black"}`}>
            {header}
          </Text>
          {subheader && (
            <Text className={`text-sm ${isActive ? "text-white" : "text-black"}`}>{subheader}</Text>
          )}
        </View>
      </View>

      {/* Difficulty level selector */}
      <View className="flex-row justify-around">
        {levels.map((level) => {
          const selected = selectedLevel === level;
          const buttonClasses = `px-2 py-1 border rounded-md ${selected ? (isActive ? "bg-white border-primary" : "bg-primary border-primary") : "bg-white border-gray-300"}`;
          const textColor = selected
            ? isActive
              ? "text-primary"
              : "text-white"
            : isActive
              ? "text-white"
              : "text-black";
          return (
            <TouchableOpacity
              key={level}
              onPress={() => onLevelSelect(level)}
              className={buttonClasses}
            >
              <Text className={`text-sm ${textColor}`}>{level}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
