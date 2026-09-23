import React from "react";
import { Text, View, ViewProps } from "react-native";

export interface CardProps extends ViewProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, subtitle, children, className = "", ...rest }: CardProps) {
  return (
    <View
      className={`rounded-2xl border border-slate-700/80 bg-slate-800/80 p-5 shadow-lg ${className}`}
      {...rest}
    >
      {(title || subtitle) && (
        <View className="mb-3">
          {title && <Text className="text-lg font-bold tracking-tight text-white">{title}</Text>}
          {subtitle && <Text className="mt-0.5 text-xs text-slate-400">{subtitle}</Text>}
        </View>
      )}
      {children}
    </View>
  );
}
