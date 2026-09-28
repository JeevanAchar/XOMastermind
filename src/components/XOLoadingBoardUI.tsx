import { Pencil, Sparkles } from "lucide-react-native";
import React from "react";
import { Animated, Easing, Text, View } from "react-native";

export const XOLoadingBoard: React.FC = () => {
  const [xScale] = React.useState(() => new Animated.Value(0.85));
  const [oScale] = React.useState(() => new Animated.Value(0.85));

  React.useEffect(() => {
    const xAnimation = Animated.loop(
      Animated.sequence([
        Animated.spring(xScale, {
          toValue: 1,
          friction: 5,
          tension: 80,
          useNativeDriver: true,
        }),
        Animated.delay(700),
        Animated.timing(xScale, {
          toValue: 0.9,
          duration: 400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );

    const oAnimation = Animated.loop(
      Animated.sequence([
        Animated.delay(300),
        Animated.spring(oScale, {
          toValue: 1,
          friction: 5,
          tension: 80,
          useNativeDriver: true,
        }),
        Animated.delay(600),
        Animated.timing(oScale, {
          toValue: 0.9,
          duration: 400,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );

    xAnimation.start();
    oAnimation.start();

    return () => {
      xAnimation.stop();
      oAnimation.stop();
    };
  }, [oScale, xScale]);

  return (
    <View>
      <View className="relative h-[330px] w-[330px]">
        {/* ───────── Grid ───────── */}
        <View>
          {/* Vertical */}
          <View
            className="absolute left-[100px] top-5 h-[245px] w-[2px] bg-[#9C9C9C]"
            style={{ opacity: 0.45 }}
          />
          <View
            className="absolute left-[200px] top-5 h-[245px] w-[2px] bg-[#9C9C9C]"
            style={{ opacity: 0.45 }}
          />
          {/* Horizontal */}
          <View
            className="absolute left-5 top-[82px] h-[2px] w-[275px] bg-[#9C9C9C]"
            style={{ opacity: 0.45 }}
          />
          <View
            className="absolute left-5 top-[172px] h-[2px] w-[275px] bg-[#9C9C9C]"
            style={{ opacity: 0.45 }}
          />
        </View>

        {/* ───────── X - TOP LEFT ───────── */}
        <View className="absolute left-[20px] top-[35px]">
          <Animated.View
            className="h-[80px] w-[80px] items-center justify-center"
            style={{
              transform: [{ scale: xScale }, { rotate: "-3deg" }],
            }}
          >
            {/* \ */}
            <View
              className="absolute h-[13px] w-[90px] rounded-full bg-[#dc2626]"
              style={{
                transform: [{ rotate: "45deg" }],
              }}
            />

            {/* / */}
            <View
              className="absolute h-[13px] w-[90px] rounded-full bg-[#dc2626]"
              style={{
                transform: [{ rotate: "-45deg" }],
              }}
            />
          </Animated.View>
        </View>

        {/* ───────── O - BOTTOM RIGHT ───────── */}
        <View className="absolute left-[220px] top-[185px]">
          <Animated.View
            style={{
              transform: [{ scale: oScale }, { rotate: "1deg" }],
            }}
          >
            <View className="h-[75px] w-[75px] rounded-full border-[13px] border-[#1a4480]" />
          </Animated.View>
        </View>

        {/* ───────── Sparkle ───────── */}
        <View className="absolute right-[28px] top-[8px]">
          <Sparkles size={22} color="#fbbf24" fill="#fbbf24" strokeWidth={1.5} />
        </View>

        {/* ───────── Pencil ───────── */}
        <View className="absolute bottom-[60px] left-[28px]">
          <Pencil size={22} color="#dc2626" strokeWidth={2.5} />
        </View>
      </View>

      {/* Header */}
      <DoodleXOHeader />
    </View>
  );
};

export const DoodleXOHeader: React.FC = () => {
  return (
    <View className="items-center">
      {/* Title + underline */}
      <View className="relative">
        <Text
          className="font-serif text-[28px] font-bold tracking-[-0.5px] text-[#123B68]"
          style={{
            includeFontPadding: false,
          }}
        >
          DOODLE XO
        </Text>

        {/* Yellow hand-drawn underline */}
        <View
          className="absolute -bottom-[7px] left-[1px] h-[7px] w-[178px] rounded-full bg-[#F9C63D]"
          style={{
            transform: [{ rotate: "-1.5deg" }],
          }}
        />

        {/* Small variation to make it feel hand-drawn */}
        <View
          className="absolute -bottom-[6px] left-[8px] h-[4px] w-[164px] rounded-full bg-[#F9C63D]"
          style={{
            transform: [{ rotate: "0.5deg" }],
          }}
        />
      </View>

      {/* Subtitle */}
      <Text
        className="mt-[10px] font-serif text-[17px] text-[#555555]"
        style={{
          includeFontPadding: false,
        }}
      >
        the graph paper showdown
      </Text>
    </View>
  );
};
