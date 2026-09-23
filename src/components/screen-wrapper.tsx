import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";

export interface ScreenWrapperProps extends SafeAreaViewProps {
  children: React.ReactNode;
  scrollable?: boolean;
  className?: string;
  contentContainerClassName?: string;
}

export function ScreenWrapper({
  children,
  scrollable = false,
  className = "",
  contentContainerClassName = "",
  ...rest
}: ScreenWrapperProps) {
  return (
    <SafeAreaView className={`flex-1 bg-slate-950 ${className}`} {...rest}>
      {scrollable ? (
        <ScrollView
          className="flex-1"
          contentContainerClassName={`p-5 pb-10 ${contentContainerClassName}`}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View className={`flex-1 p-5 ${contentContainerClassName}`}>{children}</View>
      )}
    </SafeAreaView>
  );
}
