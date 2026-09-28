import { NotepadBackground } from "@components/NotepadBackground";
import React from "react";
import { View } from "react-native";
import { PageNote } from "../PageNote";
import { PencilBattle01 } from "../pencil/PencilBattle01";
import { XOAnimation } from "../xo/XOAnimation";
import { XOLoadingBoard } from "../XOLoadingBoardUI";
import { LoadingProgressBar } from "./LoadingProgressBar";

type InitialLoadingScreenProps = {
  /** Progress value (0-100). Omit for indeterminate loading */
  progress?: number;
  /** Optional header text above the progress bar */
  header?: string;
  /** Show numeric percentage next to the bar */
  showPercentage?: boolean;
  /** Whether the page block should appear pinned */
  pinned?: boolean;
};

/**
 * A reusable screen that composes the common loading UI pieces.
 * It can be used right after the splash screen to indicate app boot‑up.
 */
export const InitialLoadingScreen: React.FC<InitialLoadingScreenProps> = ({
  progress,
  header,
  showPercentage = false,
  pinned = false,
}) => {
  return (
    <NotepadBackground className="flex-1">
      <View className="bg-neutral flex-1 items-center justify-center p-4">
        <View>
          <PencilBattle01 />
        </View>

        <View className="relative">
          <XOLoadingBoard />
        </View>

        {/* Progress bar */}
        <LoadingProgressBar progress={progress} header={header} showPercentage={showPercentage} />

        {/* Visual embellishments */}
        <View className="mt-6 w-full flex-row items-center justify-around">
          <XOAnimation />
        </View>

        <PageNote header="header" subheader="sub header" />
      </View>
    </NotepadBackground>
  );
};
