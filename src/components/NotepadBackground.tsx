import type { NotepadBackgroundProps } from "@c-types/NotepadBackgroundProps";
import { COLORS } from "@constants/theme";
import React from "react";
import { View } from "react-native";

/**
 * NotepadBackground renders a graph-notebook sheet (color COLORS.paper) with a
 * faint graph-paper grid (COLORS.gridLine) and a left-hand red margin line (COLORS.marginLine).
 * All static styling follows NativeWind / Tailwind classes and design system tokens.
 */
export const NotepadBackground: React.FC<NotepadBackgroundProps> = ({
  children,
  className = "",
  showHeaderPins = false,
  showMarginLine = true,
  showBinderHoles = false,
  showTopSpiralRings = false,
}) => {
  const horizontalLines = 80;
  const verticalLines = 40;
  const sidePageButtons = 15;
  const headerPin = 8;
  const topSpiralRingsCount = 8;
  const binderHolesCount = 6;

  return (
    <View
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: COLORS.paper }}
    >
      {/* Top Spiral Wire Rings (Screenshot 1: Splash & Loader) */}
      {showTopSpiralRings && (
        <View
          className="absolute left-0 right-0 top-0 z-30 flex-row items-center justify-around px-4 pt-1"
          pointerEvents="none"
        >
          {Array.from({ length: topSpiralRingsCount }, (_, i) => (
            <View key={`spiral-${i}`} className="items-center">
              {/* Metallic loop stroke */}
              <View
                className="h-3 w-1.5 rounded-full"
                style={{
                  backgroundColor: COLORS.wireRings,
                  marginBottom: -2,
                }}
              />
              {/* Punched hole shadow */}
              <View
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor: COLORS.shadowDark,
                }}
              />
            </View>
          ))}
        </View>
      )}

      {/* Optional binder header with glass effect */}
      {showHeaderPins && (
        <View className="absolute left-0 top-0 z-50 flex h-10 w-full items-center justify-center border-b border-b-[#9C9C9C] bg-white bg-opacity-70 backdrop-blur-md">
          <View className="mx-auto flex w-full max-w-[75%] flex-row items-center justify-between gap-2">
            {Array.from({ length: headerPin }, (_, i) => (
              <View key={"pn" + i} className="relative">
                {/* Pin stem */}
                <View className="absolute -top-2.5 left-[3px] items-center">
                  <View className="h-4 w-1.5 rounded-full bg-[#a8a8a8]" />
                </View>
                {/* Round dot */}
                <View className="z-40 h-3 w-3 rounded-full bg-[#4f5255]" />
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Side notebook punch holes (legacy) */}
      {showHeaderPins &&
        Array.from({ length: sidePageButtons }, (_, i) => (
          <View
            key={"s" + i}
            className="absolute left-4 h-2 w-2 rounded-full bg-[#1e293b]"
            style={{ top: `${3 + (i * 100) / (sidePageButtons - 1)}%`, opacity: 0.32 }}
          />
        ))}

      {/* Left edge binder punch holes (Screenshot 2: Game Hub) */}
      {showBinderHoles && (
        <View
          className="absolute bottom-10 left-2 top-10 z-20 justify-between"
          pointerEvents="none"
        >
          {Array.from({ length: binderHolesCount }, (_, i) => (
            <View
              key={`binder-${i}`}
              className="h-3.5 w-3.5 items-center justify-center rounded-full border"
              style={{
                borderColor: COLORS.binderPunchStroke,
                backgroundColor: COLORS.binderPunchInner,
              }}
            >
              <View
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: COLORS.pencilMuted, opacity: 0.3 }}
              />
            </View>
          ))}
        </View>
      )}

      {/* Left red margin guide line */}
      {showMarginLine && (
        <View
          className="absolute bottom-0 top-0 w-[1.5px]"
          style={{
            left: 28,
            backgroundColor: COLORS.marginLine,
            opacity: 0.65,
          }}
        />
      )}

      {/* Graph grid overlay */}
      <View className="absolute inset-0" pointerEvents="none">
        {/* Horizontal grid lines */}
        {Array.from({ length: horizontalLines }, (_, i) => (
          <View
            key={"h" + i}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${(i * 100) / (horizontalLines - 1)}%`,
              backgroundColor: COLORS.gridLine,
              opacity: 0.22,
            }}
          />
        ))}
        {/* Vertical grid lines */}
        {Array.from({ length: verticalLines }, (_, i) => (
          <View
            key={"v" + i}
            className="absolute bottom-0 top-0 w-px"
            style={{
              left: `${(i * 100) / (verticalLines - 1)}%`,
              backgroundColor: COLORS.gridLine,
              opacity: 0.22,
            }}
          />
        ))}
      </View>

      {/* Content wrapper */}
      <View className="relative flex-1">{children}</View>
    </View>
  );
};
