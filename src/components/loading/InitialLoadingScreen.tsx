import type { InitialLoadingScreenProps } from "@c-types/InitialLoadingScreenProps";
import { LoadingProgressBar } from "@components/loading/LoadingProgressBar";
import { NotepadBackground } from "@components/NotepadBackground";
import { PageNote } from "@components/PageNote";
import { PencilBattle01 } from "@components/pencil/PencilBattle01";
import { XOLoadingBoard } from "@components/XOLoadingBoardUI";
import { TEXT } from "@constants/texts";
import { COLORS } from "@constants/theme";
import { BellOff, CheckCircle2, Pencil } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/**
 * InitialLoadingScreen – renders the paper-themed loader screen:
 * - Spiral rings binder at top
 * - "Pencil Battle No. 01" badge
 * - DOODLE XO mascot & 3x3 pencil grid guide
 * - Progress bar that sharpens pencils up to 100% ("Ready to doodle!")
 * - 3 dots indicator
 * - "Study Hall Secret" clipped sticky note card
 * - Footer notice: "Class in session • Keep scribbles quiet"
 */
export const InitialLoadingScreen: React.FC<InitialLoadingScreenProps> = ({
  progress: externalProgress,
  header,
  showPercentage = true,
  onComplete,
}) => {
  const [internalProgress, setInternalProgress] = useState(15);
  const currentProgress = externalProgress !== undefined ? externalProgress : internalProgress;

  useEffect(() => {
    if (externalProgress !== undefined) {
      return;
    }

    // Auto-progress simulation if external progress isn't controlled
    const interval = setInterval(() => {
      setInternalProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) {
            setTimeout(onComplete, 500);
          }
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 12;
        const next = Math.min(prev + step, 100);
        if (next === 100 && onComplete) {
          setTimeout(onComplete, 600);
        }
        return next;
      });
    }, 280);

    return () => clearInterval(interval);
  }, [externalProgress, onComplete]);

  const isReady = currentProgress >= 100;
  const currentHeader = header ?? (isReady ? TEXT.READY_TO_DOODLE : TEXT.SHARPENING_PENCILS);

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: COLORS.canvas }}>
      <NotepadBackground className="flex-1" showTopSpiralRings showMarginLine>
        <View className="flex-1 justify-between px-6 pb-4 pt-7">
          {/* Top: Pencil Battle No. 01 Tag */}
          <View className="items-center">
            <PencilBattle01 />
          </View>

          {/* Center Mascot & XO Board */}
          <View className="-my-3 items-center">
            <XOLoadingBoard />
          </View>

          {/* Progress Block */}
          <View className="w-full">
            <LoadingProgressBar
              progress={currentProgress}
              header={currentHeader}
              headerIcon={
                isReady ? (
                  <CheckCircle2 size={18} color={COLORS.primaryNavy} strokeWidth={2.2} />
                ) : (
                  <Pencil size={16} color={COLORS.primaryNavy} strokeWidth={2} />
                )
              }
              showPercentage={showPercentage}
            />

            {/* 3 Pagination / Progress dots below bar */}
            <View className="mt-1.5 flex-row items-center justify-center gap-1.5">
              <View
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: COLORS.pencilMuted, opacity: 0.8 }}
              />
              <View
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: COLORS.pencilMuted, opacity: 0.5 }}
              />
              <View
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: COLORS.pencilMuted, opacity: 0.3 }}
              />
            </View>
          </View>

          {/* Study Hall Secret Sticky Card */}
          <View className="w-full px-1">
            <PageNote
              header={TEXT.STUDY_HALL_SECRET}
              subheader={`"${TEXT.STUDY_HALL_TIP}"`}
              headerIcon={
                <View
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: COLORS.accentRed }}
                />
              }
              footerLeft={TEXT.DESK_MATE_MATCH}
              footerRight={TEXT.FIVE_WINS}
              paperColor={COLORS.white}
              rotation="-1.5deg"
            />
          </View>

          {/* Bottom Footer Notice */}
          <View className="flex-row items-center justify-center gap-1.5 pb-1">
            <BellOff size={13} color={COLORS.footerText} strokeWidth={2} />
            <Text
              className="font-serif text-[11px] font-medium"
              style={{ color: COLORS.footerText }}
            >
              {TEXT.CLASS_IN_SESSION}
            </Text>
          </View>
        </View>
      </NotepadBackground>
    </SafeAreaView>
  );
};
