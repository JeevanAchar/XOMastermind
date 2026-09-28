import React, { ReactNode, useEffect, useState } from "react";
import { Animated, Easing, LayoutChangeEvent, Text, View } from "react-native";

interface LoadingProgressBarProps {
  /** Progress value from 0 to 100 */
  progress?: number;
  /** Optional header content */
  header?: ReactNode;
  /** Optional icon displayed before the header */
  headerIcon?: ReactNode;
  /** Optional icon displayed at the progress edge */
  indicator?: ReactNode;
  /** Show percentage on the right side of the header */
  showPercentage?: boolean;
  /** Additional className for the outer container */
  className?: string;
  /** Tailwind class for the progress track */
  trackClassName?: string;
  /** Tailwind class for the filled progress */
  progressClassName?: string;
  /** Height of the progress bar */
  heightClassName?: string;
  /** Animate progress changes */
  animated?: boolean;
}

export const LoadingProgressBar: React.FC<LoadingProgressBarProps> = ({
  progress,
  header,
  headerIcon,
  indicator,
  showPercentage = false,
  className = "",
  trackClassName = "bg-white",
  progressClassName = "bg-[#1A4480]",
  heightClassName = "h-6",
  animated = true,
}) => {
  const isIndeterminate = progress === undefined;

  const [containerWidth, setContainerWidth] = useState(0);

  const [animatedWidth] = useState(() => new Animated.Value(0));

  const clampedProgress = isIndeterminate ? 100 : Math.min(Math.max(progress ?? 0, 0), 100);

  /**
   * Get the actual width of the progress bar.
   */
  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  /**
   * Calculate target width in pixels.
   */
  const targetWidth = (containerWidth * clampedProgress) / 100;

  /**
   * Animate the fill.
   */
  useEffect(() => {
    if (containerWidth === 0) {
      return;
    }

    if (!animated) {
      animatedWidth.setValue(targetWidth);
      return;
    }

    if (isIndeterminate) {
      /**
       * Indeterminate animation:
       * 0 -> full width -> 0
       */
      animatedWidth.setValue(0);

      const animation = Animated.loop(
        Animated.sequence([
          Animated.timing(animatedWidth, {
            toValue: containerWidth,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: false,
          }),

          Animated.timing(animatedWidth, {
            toValue: 0,
            duration: 0,
            useNativeDriver: false,
          }),
        ]),
      );

      animation.start();

      return () => {
        animation.stop();
      };
    }

    /**
     * Normal progress animation.
     */
    Animated.timing(animatedWidth, {
      toValue: targetWidth,
      duration: 600,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [containerWidth, targetWidth, animated, isIndeterminate, animatedWidth]);

  /**
   * Indicator position.
   */
  const indicatorLeft = animatedWidth;

  return (
    <View className={`w-full ${className}`}>
      {/* Header */}
      {(header || showPercentage) && (
        <View className="mb-2 flex-row items-center justify-between">
          <View className="flex-row items-center gap-1.5">
            {headerIcon}

            {header && (
              <Text
                className="font-serif text-[17px] font-bold text-[#123B68]"
                style={{
                  includeFontPadding: false,
                }}
              >
                {header}
              </Text>
            )}
          </View>

          {showPercentage && (
            <Text
              className="font-serif text-[17px] font-bold text-[#123B68]"
              style={{
                includeFontPadding: false,
              }}
            >
              {Math.round(clampedProgress)}%
            </Text>
          )}
        </View>
      )}

      {/* Progress Bar */}
      <View
        onLayout={handleLayout}
        className={`relative w-full overflow-visible rounded-sm border-2 border-[#333333] ${trackClassName} ${heightClassName} `}
      >
        {/* Animated Fill */}
        <View
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: `${clampedProgress}%`,
            backgroundColor: "#123B68",
            overflow: "hidden",
          }}
        >
          {Array.from({ length: 25 }).map((_, index) => (
            <View
              key={index}
              style={{
                position: "absolute",
                top: -20,
                left: index * 30,
                width: 4,
                height: 80,
                backgroundColor: "white",
                transform: [{ rotate: "-35deg" }],
              }}
            />
          ))}
        </View>

        {/* Indicator */}
        {indicator && (
          <Animated.View
            style={{
              position: "absolute",
              top: "50%",
              left: indicatorLeft,
              transform: [
                {
                  translateX: -12,
                },
                {
                  translateY: -12,
                },
              ],
            }}
          >
            {indicator}
          </Animated.View>
        )}
      </View>
    </View>
  );
};
