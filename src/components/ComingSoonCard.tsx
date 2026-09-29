import type { ComingSoonCardProps } from "@c-types/ComingSoonCard";
import { TEXT } from "@constants/texts";
import { COLORS } from "@constants/theme";
import { LayoutGrid, Lock } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

/**
 * ComingSoonCard – displays upcoming or locked secondary game cards:
 * - Top washi tape accent
 * - Left status icon / Right level or "SOON" badge
 * - Game title & subheader
 * - Visual doodle preview
 * - Bottom "Coming Soon" / "🔒 Locked" status button
 */
export const ComingSoonCard: React.FC<ComingSoonCardProps> = ({
  status,
  header,
  subheader,
  imageUri,
  badgeLabel,
  previewComponent,
  renderPreview,
  onPress,
}) => {
  const PreviewComponent = previewComponent;
  const isLocked = status === "locked";
  const defaultBadge = isLocked ? TEXT.LVL_5_BADGE : TEXT.SOON_BADGE;
  const currentBadge = badgeLabel ?? defaultBadge;

  return (
    <View className="relative flex-1">
      {/* Top washi tape accent */}
      <View
        className="absolute -top-2 left-1/2 z-20 h-3.5 w-10 -translate-x-5 rounded-[1px] border border-dashed border-amber-200"
        style={{ backgroundColor: COLORS.washiTape, opacity: 0.9 }}
        pointerEvents="none"
      />

      {/* Main card box with dashed pencil border */}
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        className="rounded-lg border border-dashed p-3 shadow-sm"
        style={{
          backgroundColor: COLORS.cardMutedBg,
          borderColor: COLORS.pencilMuted,
        }}
      >
        {/* Top row: Icon on left, status/level badge on right */}
        <View className="flex-row items-center justify-between">
          {isLocked ? (
            <Lock size={15} color={COLORS.graphiteGray} strokeWidth={2} />
          ) : (
            <LayoutGrid size={15} color={COLORS.graphiteGray} strokeWidth={2} />
          )}

          <View
            className="rounded border px-1.5 py-0.5"
            style={{
              backgroundColor: isLocked ? COLORS.badgeLvlBg : COLORS.badgeSoonBg,
              borderColor: isLocked ? COLORS.badgeLvlText : COLORS.borderRule,
            }}
          >
            <Text
              className="font-serif text-[10px] font-bold"
              style={{
                color: isLocked ? COLORS.badgeLvlText : COLORS.badgeSoonText,
              }}
            >
              {currentBadge}
            </Text>
          </View>
        </View>

        {/* Game Title & Subheader */}
        <View className="mt-1.5">
          <Text
            className="font-serif text-sm font-bold"
            style={{ color: COLORS.charcoalInk }}
            numberOfLines={1}
          >
            {header}
          </Text>
          {subheader && (
            <Text
              className="mt-0.5 font-serif text-[11px]"
              style={{ color: COLORS.graphiteGray }}
              numberOfLines={1}
            >
              {subheader}
            </Text>
          )}
        </View>

        {/* Visual Preview / Thumbnail */}
        <View className="my-2.5 h-12 w-full items-center justify-center">
          {PreviewComponent ? (
            <PreviewComponent />
          ) : renderPreview ? (
            renderPreview()
          ) : imageUri ? (
            <Image
              source={{ uri: imageUri }}
              className="h-10 w-10 rounded-sm"
              resizeMode="contain"
            />
          ) : (
            <View className="h-8 w-8 items-center justify-center rounded-full bg-slate-200" />
          )}
        </View>

        {/* Status Button at bottom */}
        <View
          className="items-center justify-center rounded border py-1.5"
          style={{
            backgroundColor: COLORS.white,
            borderColor: COLORS.pencilMuted,
          }}
        >
          <Text className="font-serif text-xs font-semibold" style={{ color: COLORS.graphiteGray }}>
            {isLocked ? `🔒 ${TEXT.LOCKED}` : TEXT.COMING_SOON}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
