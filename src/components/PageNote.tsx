import type { PageNoteProps } from "@c-types/PageNoteProps";
import { COLORS } from "@constants/theme";
import { Paperclip } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { Animated, Easing, Text, View } from "react-native";

export const PageNote: React.FC<PageNoteProps> = ({
  header,
  subheader,
  headerIcon,
  children,
  paperColor = COLORS.white,
  width = "100%",
  rotation = "-2.5deg",
  wobble = true,
  footerLeft,
  footerRight,
}) => {
  const [wobbleAnimation] = useState(() => new Animated.Value(0));

  useEffect(() => {
    if (!wobble) {
      wobbleAnimation.setValue(0);
      return;
    }

    const animation = Animated.sequence([
      // Start slightly rotated in the opposite direction
      Animated.timing(wobbleAnimation, {
        toValue: 1,
        duration: 180,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),

      // Move slightly past the normal position
      Animated.timing(wobbleAnimation, {
        toValue: -0.6,
        duration: 220,
        easing: Easing.inOut(Easing.cubic),
        useNativeDriver: true,
      }),

      // Settle back to the original position
      Animated.timing(wobbleAnimation, {
        toValue: 0,
        duration: 180,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]);

    animation.start();

    return () => {
      animation.stop();
    };
  }, [wobble, wobbleAnimation]);

  /**
   * Small rotation around the original -3deg position.
   *
   * 0   -> -3deg
   * 1   -> -2.5deg
   * -1  -> -3.5deg
   */
  const wobbleRotation = wobbleAnimation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ["-3.5deg", "-3deg", "-2.5deg"],
  });

  return (
    <Animated.View
      className="relative min-h-[190px] self-center"
      style={{
        width,
        transform: [{ rotate: wobble ? wobbleRotation : rotation }],
      }}
    >
      {/* Paper shadow */}
      <View className="absolute -bottom-[5px] -right-1 left-1 top-1 rounded bg-black/20" />

      {/* Paper */}
      <View
        className="relative min-h-[190px] overflow-hidden rounded-[3px] border-2 border-[#30343B]"
        style={{
          backgroundColor: paperColor,
          elevation: 3,
        }}
      >
        {/* ─────────────────────────────
            Notebook ruled lines
        ───────────────────────────── */}
        <View pointerEvents="none" className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, index) => (
            <View
              key={index}
              className="absolute left-[18px] right-[18px] h-px bg-[#CBD6E2]/75"
              style={{
                top: 72 + index * 30,
              }}
            />
          ))}
        </View>

        {/* Paper Clip */}
        <View
          className="absolute -right-1 -top-1 z-50"
          style={{
            width: 52,
            height: 60,
            overflow: "visible",
          }}
        >
          <Paperclip
            size={48}
            color="#6B7075"
            strokeWidth={2.5}
            style={{
              transform: [{ rotate: "-20deg" }],
            }}
          />
        </View>

        {/* ─────────────────────────────
            Content
        ───────────────────────────── */}
        {/* ─────────────────────────────
            Content
        ───────────────────────────── */}
        <View className="z-10 px-5 pb-3.5 pt-5">
          {/* Header */}
          <View className="mb-1.5 flex-row items-center">
            {headerIcon && <View className="mr-1.5">{headerIcon}</View>}
            <Text className="font-serif text-sm font-bold" style={{ color: COLORS.primaryNavy }}>
              {header}
            </Text>
          </View>

          {/* Main note */}
          <Text className="font-serif text-xs leading-5" style={{ color: COLORS.charcoalInk }}>
            {subheader}
          </Text>

          {/* Optional content */}
          {children && <View className="mt-2">{children}</View>}

          {/* Footer row (e.g. Desk Mate Match #14 and |||| 5 wins) */}
          {(footerLeft || footerRight) && (
            <View
              className="mt-3 flex-row items-center justify-between border-t pt-2"
              style={{ borderColor: COLORS.borderRule }}
            >
              {footerLeft && (
                <Text
                  className="font-serif text-[11px] font-medium"
                  style={{ color: COLORS.graphiteGray }}
                >
                  {footerLeft}
                </Text>
              )}
              {footerRight && (
                <Text
                  className="font-serif text-[11px] font-bold"
                  style={{ color: COLORS.royalBlue }}
                >
                  {footerRight}
                </Text>
              )}
            </View>
          )}
        </View>
      </View>
    </Animated.View>
  );
};
