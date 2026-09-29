import type { SplashScreenProps } from "@c-types/SplashScreenProps";
import { NotepadBackground } from "@components/NotepadBackground";
import { XOLoadingBoard } from "@components/XOLoadingBoardUI";
import { COLORS } from "@constants/theme";
import React, { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * SplashScreen – the opening paper-themed splash view.
 * Utilizes NotepadBackground and renders the XOLoadingBoard grid in the center.
 */
export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete, durationMs = 2000 }) => {
  useEffect(() => {
    if (!onComplete) return;
    const timer = setTimeout(() => {
      onComplete();
    }, durationMs);
    return () => clearTimeout(timer);
  }, [onComplete, durationMs]);

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: COLORS.canvas }}>
      <NotepadBackground className="flex-1" showTopSpiralRings showMarginLine>
        <View className="flex-1 items-center justify-center px-4">
          <XOLoadingBoard />
        </View>
      </NotepadBackground>
    </SafeAreaView>
  );
};
