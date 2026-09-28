import type { ComingSoonCardProps } from "@c-types/ComingSoonCard";
import { ReusableButton } from "@components/ReusableButton";
import { TEXT } from "@constants/texts";
import { COLORS } from "@constants/theme";
import { Lock, Play } from "lucide-react-native";
import React from "react";
import { Image, Text, View } from "react-native";

/**
 * Card component that displays an upcoming or locked game.
 * Shows a status icon, header, optional sub‑header, thumbnail image, and a button‑like label.
 */
export const ComingSoonCard: React.FC<ComingSoonCardProps> = ({
  status,
  header,
  subheader,
  imageUri,
  onPress,
}) => {
  const isLocked = status === "locked";
  const IconComponent = isLocked ? Lock : Play;

  return (
    <View
      style={{ backgroundColor: COLORS.paper, borderColor: COLORS.gray, borderWidth: 1 }}
      className="my-1 flex-row items-center gap-2 rounded-lg p-2"
      onTouchEnd={onPress}
    >
      {/* Status icon */}
      <IconComponent size={20} color={isLocked ? COLORS.red : COLORS.gray} className="mr-1" />

      {/* Text content */}
      <View className="flex-1">
        <Text className="text-base font-semibold text-black">{header}</Text>
        {subheader && <Text className="mt-1 text-xs text-gray-500">{subheader}</Text>}
      </View>

      {/* Thumbnail */}
      <Image source={{ uri: imageUri }} className="ml-2 h-12 w-12 rounded-sm" />

      {/* Action button/label */}
      <ReusableButton
        variant={isLocked ? "secondary" : "default"}
        onPress={onPress}
        className="comingSoonBtn"
      >
        {isLocked ? TEXT.LOCKED : TEXT.COMING_SOON}
      </ReusableButton>
    </View>
  );
};
