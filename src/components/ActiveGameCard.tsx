import type { ActiveGame } from "@c-types/ActiveGame";
import { TEXT } from "@constants/texts";
import { COLORS } from "@constants/theme";
import { Play } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

/**
 * ActiveGameCard – renders the featured game card matching Screenshot 2:
 * - Top washi tape strips
 * - "HOT!" flame pill badge at top center
 * - Game title & subheader
 * - Player count badge ("2 PLAYERS")
 * - Game thumbnail image or interactive mini doodle grid preview
 * - "PLAY NOW" prominent CTA button with 3D hard shadow
 */
export const ActiveGameCard: React.FC<{ game: ActiveGame }> = ({ game }) => {
  const {
    isHotGame,
    header,
    subheader,
    playerCount,
    imageUri,
    previewComponent,
    renderPreview,
    onPlayPress,
  } = game;
  const PreviewComponent = previewComponent;

  return (
    <View className="relative my-3 w-full">
      {/* Top washi tape strips */}
      <View
        className="absolute -top-2 left-6 z-20 h-4 w-12 rounded-[1px] border border-dashed border-amber-200"
        style={{ backgroundColor: COLORS.washiTape, opacity: 0.85 }}
        pointerEvents="none"
      />
      <View
        className="absolute -top-2 right-6 z-20 h-4 w-12 rounded-[1px] border border-dashed border-amber-200"
        style={{ backgroundColor: COLORS.washiTape, opacity: 0.85 }}
        pointerEvents="none"
      />

      {/* "HOT!" flame badge pinned at top center */}
      {isHotGame && (
        <View
          className="absolute -top-3 left-1/2 z-30 -translate-x-8 flex-row items-center rounded-full px-2.5 py-0.5 shadow-sm"
          style={{ backgroundColor: COLORS.accentRed }}
        >
          <Text className="text-[10px]">🔥</Text>
          <Text className="ml-1 font-serif text-[11px] font-bold tracking-wider text-white">
            {TEXT.HOT}
          </Text>
        </View>
      )}

      {/* Main Card Surface */}
      <View
        className="rounded-lg border-2 p-3.5 pt-4 shadow-sm"
        style={{
          backgroundColor: COLORS.white,
          borderColor: COLORS.charcoalInk,
        }}
      >
        {/* Header row: Title/Subheader on left, Player tag on right */}
        <View className="flex-row items-start justify-between">
          <View className="flex-1 pr-2">
            <Text className="font-serif text-lg font-bold" style={{ color: COLORS.primaryNavy }}>
              {header}
            </Text>
            {subheader && (
              <Text
                className="mt-0.5 font-serif text-xs font-medium"
                style={{ color: COLORS.subtitleText }}
              >
                {subheader}
              </Text>
            )}
          </View>

          {/* Player Count Tag */}
          <View
            className="rounded border px-2 py-1"
            style={{
              backgroundColor: COLORS.tagBlueBg,
              borderColor: COLORS.primaryNavy,
            }}
          >
            <Text
              className="text-center font-serif text-[10px] font-bold tracking-tight"
              style={{ color: COLORS.primaryNavy }}
            >
              {playerCount} PLAYERS
            </Text>
          </View>
        </View>

        {/* Game Visual: Custom Preview or Image */}
        {PreviewComponent ? (
          <PreviewComponent />
        ) : renderPreview ? (
          renderPreview()
        ) : imageUri ? (
          <View
            className="my-3 h-32 w-full items-center justify-center overflow-hidden rounded-sm border"
            style={{
              backgroundColor: COLORS.white,
              borderColor: COLORS.charcoalInk,
            }}
          >
            <Image source={{ uri: imageUri }} className="h-full w-full" resizeMode="contain" />
          </View>
        ) : null}

        {/* "PLAY NOW" Button with authentic hard 3D shadow */}
        <TouchableOpacity
          onPress={onPlayPress}
          activeOpacity={0.85}
          className="mt-1 flex-row items-center justify-center gap-2 rounded-md py-3 shadow-md"
          style={{
            backgroundColor: COLORS.primaryNavy,
            shadowColor: COLORS.shadowDark,
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.35,
            shadowRadius: 1,
            elevation: 4,
          }}
          accessibilityRole="button"
          accessibilityLabel={TEXT.PLAY_NOW}
        >
          <Play size={15} color={COLORS.white} fill={COLORS.white} />
          <Text className="font-serif text-sm font-bold tracking-wider text-white">
            {TEXT.PLAY_NOW.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
