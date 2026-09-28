import { Paperclip } from "lucide-react-native";
import React, { ReactNode, useEffect, useState } from "react";
import { Animated, DimensionValue, Easing, Text, View } from "react-native";

interface PageNoteProps {
  /** Small title at the top */
  header: string;
  /** Main note text */
  subheader: string;
  /** Optional icon before the header */
  headerIcon?: ReactNode;
  /** Optional content below the subheader */
  children?: ReactNode;
  /** Paper background color */
  paperColor?: string;
  /** Note width */
  width?: DimensionValue;
  /** Note rotation */
  rotation?: string;
  /** Enable subtle paper wobble */
  wobble?: boolean;
}

export const PageNote: React.FC<PageNoteProps> = ({
  header,
  subheader,
  headerIcon,
  children,
  paperColor = "#FFFDF7",
  width = "100%",
  rotation = "-3deg",
  wobble = true,
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
        <View className="z-10 px-6 pb-[22px] pt-7">
          {/* Header */}
          <View className="mb-2 flex-row items-center">
            {headerIcon && <View className="mr-2">{headerIcon}</View>}
            <Text className="font-serif text-[17px] font-semibold text-[#123B68]">{header}</Text>
          </View>

          {/* Main note */}
          <Text className="font-serif text-[24px] leading-[34px] text-[#292929]">{subheader}</Text>

          {/* Optional content */}
          {children && <View className="mt-3.5">{children}</View>}
        </View>
      </View>
    </Animated.View>
  );
};
