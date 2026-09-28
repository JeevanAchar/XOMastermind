import type { RecordComponentProps } from "@c-types/RecordInfo";
import { TEXT } from "@constants/texts";
import { COLORS } from "@constants/theme";
import { Flame, Pencil } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import Svg, { Line } from "react-native-svg";

/**
 * RecordComponent renders a taped yellow sticky note showing:
 * - Frosted masking tape at top center
 * - Top header with Pencil icon, "PENCIL RECORD", and "Sheet #3"
 * - Dashed horizontal notebook divider
 * - "Win Streak" card with fiery streak count and Flame icon
 * - "Games Played" card with total games and authentic pencil tally mark doodle
 */
export const RecordComponent: React.FC<RecordComponentProps> = ({ info, className = "" }) => {
  const {
    header = TEXT.PENCIL_RECORD,
    winStreak,
    gamesPlayed,
    sheetLabel = TEXT.DEFAULT_SHEET,
  } = info;

  return (
    <View className={`relative my-2 w-full ${className}`}>
      {/* Frosted translucent Scotch / masking tape at top center */}
      <View
        className="absolute -top-2.5 left-1/2 z-20 h-4 w-16 -translate-x-8 rounded-[1px] border border-dashed border-slate-300 bg-white/75 shadow-sm"
        pointerEvents="none"
      />

      {/* Main Sticky Note */}
      <View
        className="relative overflow-hidden rounded-lg border p-3.5 pt-4 shadow-sm"
        style={{
          backgroundColor: COLORS.stickyYellow,
          borderColor: COLORS.stickyBorder,
          transform: [{ rotate: "0.8deg" }],
        }}
      >
        {/* Top header row */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-1.5">
            <Pencil size={15} color={COLORS.recordTitle} strokeWidth={2.5} />
            <Text
              className="font-serif text-xs font-bold tracking-wider"
              style={{ color: COLORS.recordTitle }}
            >
              {header}
            </Text>
          </View>
          <Text className="font-serif text-xs" style={{ color: COLORS.recordTitle }}>
            {sheetLabel}
          </Text>
        </View>

        {/* Dashed separator line */}
        <View
          className="my-2.5 border-b border-dashed"
          style={{ borderColor: COLORS.stickyBorder }}
        />

        {/* Two Stats Cards */}
        <View className="flex-row gap-2.5">
          {/* Win Streak Card */}
          <View
            className="flex-1 items-center rounded-md border p-2.5"
            style={{
              backgroundColor: COLORS.cardIvory,
              borderColor: COLORS.cardBorder,
            }}
          >
            <Text className="font-serif text-sm font-bold" style={{ color: COLORS.mascotTitle }}>
              {TEXT.WIN_STREAK}
            </Text>
            <View className="mt-1 flex-row items-center gap-1.5">
              <Text
                className="font-serif text-2xl font-bold"
                style={{ color: COLORS.underlineRed }}
              >
                {winStreak}
              </Text>
              <Flame size={20} color="#ea580c" fill="#f97316" />
            </View>
          </View>

          {/* Games Played Card */}
          <View
            className="flex-1 items-center rounded-md border p-2.5"
            style={{
              backgroundColor: COLORS.cardIvory,
              borderColor: COLORS.cardBorder,
            }}
          >
            <Text className="font-serif text-sm font-bold" style={{ color: COLORS.mascotTitle }}>
              {TEXT.GAMES_PLAYED}
            </Text>
            <View className="mt-1 flex-row items-center gap-2">
              <Text className="font-serif text-2xl font-bold" style={{ color: COLORS.mascotTitle }}>
                {gamesPlayed}
              </Text>
              {/* Hand-drawn 5-tally pencil stroke doodle */}
              <Svg width="18" height="20" viewBox="0 0 18 20">
                <Line
                  x1="3"
                  y1="2"
                  x2="3"
                  y2="18"
                  stroke={COLORS.tallyColor}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <Line
                  x1="6.5"
                  y1="2"
                  x2="6.5"
                  y2="18"
                  stroke={COLORS.tallyColor}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <Line
                  x1="10"
                  y1="2"
                  x2="10"
                  y2="18"
                  stroke={COLORS.tallyColor}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <Line
                  x1="13.5"
                  y1="2"
                  x2="13.5"
                  y2="18"
                  stroke={COLORS.tallyColor}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <Line
                  x1="1"
                  y1="16"
                  x2="16"
                  y2="4"
                  stroke={COLORS.tallyColor}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </Svg>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
