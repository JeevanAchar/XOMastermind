import type { GameSetupScreenProps } from "@c-types/GameSetupScreenProps";
import type { MarkerColor } from "@c-types/MarkerOption";
import { Footer } from "@components/Footer";
import { NotepadBackground } from "@components/NotepadBackground";
import { PickYourMarker } from "@components/PickYourMarker";
import { SelectGrid } from "@components/SelectGrid";
import { SelectOpponent } from "@components/SelectOpponent";
import { StartMatchButton } from "@components/StartMatchButton";
import { TopAppBar } from "@components/TopAppBar";
import { COLORS } from "@constants/theme";
import { Bot, Users } from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * GameSetupScreen allows users to customize their XO match:
 * - Grid size (3x3, 4x4, 5x5)
 * - Opponent (Bot or Local Friends)
 * - Marker (Blue Pen 'X' or Red Ink 'O')
 * - Start Match action
 */
export const GameSetupScreen: React.FC<GameSetupScreenProps> = ({ onBack, onStartMatch }) => {
  const [gridSize, setGridSize] = useState<number>(3);
  const [opponent, setOpponent] = useState<string>("Bot Buddy");
  const [marker, setMarker] = useState<MarkerColor>("blue");

  const handleStart = () => {
    if (onStartMatch) {
      onStartMatch({
        gridSize,
        opponent,
        marker,
      });
    }
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: COLORS.canvas }}>
      <TopAppBar />
      <NotepadBackground className="flex-1" showBinderHoles showMarginLine>
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingLeft: 38,
            paddingRight: 16,
            paddingTop: 12,
            paddingBottom: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header row with back button */}
          <View className="mb-4 flex-row items-center justify-between">
            <TouchableOpacity
              onPress={onBack}
              className="rounded border px-2.5 py-1"
              style={{
                backgroundColor: COLORS.white,
                borderColor: COLORS.charcoalInk,
              }}
            >
              <Text className="font-serif text-xs font-bold" style={{ color: COLORS.charcoalInk }}>
                ← Back
              </Text>
            </TouchableOpacity>

            <Text className="font-serif text-2xl font-bold" style={{ color: COLORS.primaryNavy }}>
              Game Setup
            </Text>

            <View className="rounded px-2 py-0.5" style={{ backgroundColor: COLORS.tagBackground }}>
              <Text className="font-serif text-xs font-bold" style={{ color: COLORS.tagBorder }}>
                v1.2
              </Text>
            </View>
          </View>

          {/* 1. Grid Size Selector */}
          <SelectGrid selectedSize={gridSize} onSelect={setGridSize} />

          {/* 2. Opponent Selector */}
          <View className="my-3 gap-2">
            <Text className="font-serif text-base font-bold" style={{ color: COLORS.primaryNavy }}>
              2. Select Opponent
            </Text>
            <TouchableOpacity onPress={() => setOpponent("Bot Buddy")} activeOpacity={0.8}>
              <SelectOpponent
                Icon={
                  <Bot
                    size={22}
                    color={opponent === "Bot Buddy" ? COLORS.white : COLORS.charcoalInk}
                  />
                }
                header="Play with AI Bot"
                subheader="Smart Bot mode"
                isActive={opponent === "Bot Buddy"}
                onLevelSelect={() => setOpponent("Bot Buddy")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpponent("Local Friend")} activeOpacity={0.8}>
              <SelectOpponent
                Icon={
                  <Users
                    size={22}
                    color={opponent === "Local Friend" ? COLORS.white : COLORS.charcoalInk}
                  />
                }
                header="Pass & Play / Local Friends"
                subheader="Take turns on same device"
                isActive={opponent === "Local Friend"}
                onLevelSelect={() => setOpponent("Local Friend")}
              />
            </TouchableOpacity>
          </View>

          {/* 3. Marker Picker */}
          <PickYourMarker selected={marker} onSelect={setMarker} />

          {/* 4. Start Match Button */}
          <StartMatchButton onPress={handleStart} />
        </ScrollView>
        <Footer />
      </NotepadBackground>
    </SafeAreaView>
  );
};
