import { Pencil } from "lucide-react-native";
import React from "react";
import { Animated, Easing, Text, View } from "react-native";

/**
 * Animated "Pencil Battle No. 01" sticky-note label.
 */
export const PencilBattle01: React.FC = () => {
  const [translateX] = React.useState(() => new Animated.Value(0));

  React.useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 3,
          duration: 500,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -2,
          duration: 500,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 400,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    );
    animation.start();
    return () => animation.stop();
  }, [translateX]);

  return (
    <View className="items-center">
      <View
        className="flex-row items-center rounded-md border-[1px] border-[#7a7a7a] bg-[#fad882] px-4 py-2"
        style={{
          transform: [{ rotate: "-2deg" }],
          shadowColor: "#1e293b",
          shadowOffset: { width: 2, height: 3 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 3,
        }}
      >
        {/* Animated Pencil */}
        <Animated.View
          style={{
            transform: [{ translateX }],
          }}
        >
          <Pencil size={20} color="#4D3A3A" strokeWidth={2.5} />
        </Animated.View>

        {/* Title */}
        <Text
          className="ml-2 text-[#4D3A3A]"
          style={{
            fontFamily: "serif",
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Pencil Battle No. 01
        </Text>
      </View>
    </View>
  );
};
