import React, { useEffect, useState } from "react";
import { Animated, Easing, Text, View } from "react-native";

/**
 * XOAnimation displays the logo/image for the app with a subtle pulse animation.
 * Below the image a caption "Doodle XO" is shown.
 */
export const XOAnimation: React.FC = () => {
  const [scaleAnim] = useState(() => new Animated.Value(1));

  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 800,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 800,
          easing: Easing.in(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    );
    pulse.start();
    return () => pulse.stop();
  }, [scaleAnim]);

  return (
    <View className="items-center">
      <Animated.Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Tic-tac-toe_XO.png" }}
        style={{ width: 64, height: 64, transform: [{ scale: scaleAnim }] }}
        resizeMode="contain"
      />
      <Text className="text-primary mt-2 font-bold">Doodle XO</Text>
    </View>
  );
};
