import type { TopAppBarProps } from "@c-types/TopAppBarProps";
import { TEXT } from "@constants/texts";
import { COLORS } from "@constants/theme";
import { Paperclip, Smile, Volume2, VolumeX } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

/**
 * TopAppBar renders the school notebook header bar:
 * - Hanging paperclip on the top-left
 * - Left: User avatar squircle + Room 4B / Doodler #18
 * - Center-right: Golden pill badge showing star coins (★ 1,240)
 * - Right: Speaker button that toggles between sound and muted (speaker with slash)
 */
export const TopAppBar: React.FC<TopAppBarProps> = ({
  roomTag = TEXT.ROOM_4B,
  userName = TEXT.DOODLER_18,
  stars = TEXT.DEFAULT_STARS,
  isMuted = false,
  onToggleMute,
  className = "",
}) => {
  return (
    <View
      className={`relative w-full flex-row items-center justify-between border-b px-3 py-2.5 shadow-sm ${className}`}
      style={{
        backgroundColor: COLORS.white,
        borderColor: COLORS.borderRule,
      }}
    >
      {/* Decorative hanging metal paperclip on top-left */}
      <View
        className="absolute -top-3 left-3 z-30"
        pointerEvents="none"
        style={{
          transform: [{ rotate: "-10deg" }],
        }}
      >
        <Paperclip size={24} color={COLORS.graphiteGray} strokeWidth={2.2} />
      </View>

      {/* Left side: Profile avatar + user title */}
      <View className="ml-3 flex-row items-center gap-2">
        {/* Squircle avatar border */}
        <View
          className="h-10 w-10 items-center justify-center rounded-xl border-2"
          style={{
            borderColor: COLORS.primaryNavy,
            backgroundColor: COLORS.white,
          }}
        >
          <Smile size={22} color={COLORS.primaryNavy} strokeWidth={2} />
        </View>

        {/* Room tag & username */}
        <View className="justify-center">
          <Text
            className="font-serif text-sm font-bold tracking-tight"
            style={{ color: COLORS.primaryNavy }}
          >
            {roomTag}
          </Text>
          <Text className="font-serif text-xs font-medium" style={{ color: COLORS.graphiteGray }}>
            {userName}
          </Text>
        </View>
      </View>

      {/* Right side: Star coin badge & Speaker mute button */}
      <View className="flex-row items-center gap-2">
        {/* Star Coin Badge Pill */}
        <View
          className="flex-row items-center rounded-full border px-2.5 py-1"
          style={{
            backgroundColor: COLORS.manilaTape,
            borderColor: COLORS.tapeBorder,
          }}
        >
          <Text className="font-serif text-xs font-bold" style={{ color: COLORS.tapeBrown }}>
            {stars}
          </Text>
        </View>

        {/* Speaker Mute/Unmute Button */}
        <TouchableOpacity
          onPress={onToggleMute}
          activeOpacity={0.7}
          className="h-9 w-9 items-center justify-center rounded-lg border shadow-sm"
          style={{
            backgroundColor: COLORS.white,
            borderColor: COLORS.charcoalInk,
          }}
          accessibilityRole="button"
          accessibilityLabel={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? (
            <VolumeX size={18} color={COLORS.accentRed} strokeWidth={2.2} />
          ) : (
            <Volume2 size={18} color={COLORS.charcoalInk} strokeWidth={2.2} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
