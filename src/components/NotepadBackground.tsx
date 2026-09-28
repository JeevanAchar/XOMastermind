import React, { ReactNode } from "react";
import { View } from "react-native";

/**
 * Props for the reusable notepad‑style background.
 */
export type NotepadBackgroundProps = {
  children: ReactNode;
  className?: string; // Optional additional Tailwind classes for the outer container
};

/**
 * NotepadBackground renders a parchment‑like page (color #faf8f5) with a
 * faint graph‑paper grid (blue #60a5fa @ 22% opacity) and a left‑hand red margin
 * line (red #ef4444 @ 65% opacity). All static styles are expressed with Tailwind
 * (NativeWind) `className` utilities; dynamic positions use inline style.
 */
export const NotepadBackground: React.FC<NotepadBackgroundProps> = ({ children, className }) => {
  const horizontalLines = 100;
  const verticalLines = 50;
  const sidePageButtons = 15;
  const headerPin = 8;

  return (
    <View className={`relative overflow-hidden bg-[#faf8f5] p-4 ${className || ""}`}>
      {/* Header with blurred glass background */}
      <View className="absolute left-0 top-0 z-50 flex h-10 w-full items-center justify-center border-b border-b-[#9C9C9C] bg-white bg-opacity-70 backdrop-blur-md">
        <View className="mx-auto flex w-full max-w-[75%] flex-row items-center justify-between gap-2">
          {Array.from({ length: headerPin }, (_, i) => {
            return (
              <View key={"pn" + i} className="relative">
                {/* Pin stem */}
                <View className="absolute -top-2.5 left-[3px] items-center">
                  <View className="h-4 w-1.5 rounded-full bg-[#a8a8a8]" />
                </View>

                {/* Round dot */}
                <View className="z-40 h-3 w-3 rounded-full bg-[#4f5255]" />
              </View>
            );
          })}
        </View>
      </View>

      {/* Side page buttons */}
      {Array.from({ length: sidePageButtons }, (_, i) => (
        <View
          key={"s" + i}
          className="absolute left-4 h-2 w-2 rounded-full bg-[#1e293b]"
          style={{ top: `${3 + (i * 100) / (sidePageButtons - 1)}%`, opacity: 0.32 }}
        />
      ))}

      {/* Left margin guide line */}
      <View
        className="absolute bottom-0 left-10 top-0 w-0.5 bg-[#dc2626]"
        style={{ opacity: 0.4 }}
      />

      {/* Grid overlay */}
      <View className="absolute inset-0" pointerEvents="none">
        {/* Horizontal lines */}
        {Array.from({ length: horizontalLines }, (_, i) => (
          <View
            key={"h" + i}
            className="absolute left-0 right-0 h-px bg-[#9C9C9C]"
            style={{ top: `${(i * 100) / (horizontalLines - 1)}%`, opacity: 0.22 }}
          />
        ))}
        {/* Vertical lines */}
        {Array.from({ length: verticalLines }, (_, i) => (
          <View
            key={"v" + i}
            className="absolute bottom-0 top-0 w-px bg-[#9C9C9C]"
            style={{ left: `${(i * 100) / (verticalLines - 1)}%`, opacity: 0.22 }}
          />
        ))}
      </View>

      {/* Content */}
      <View className="relative">{children}</View>
    </View>
  );
};
