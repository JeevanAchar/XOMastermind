import React from "react";
import { Text, View } from "react-native";

type PageBlockProps = {
  /**
   * When true, the block appears "pinned" – highlighted with a shadow and a pin icon.
   */
  pinned?: boolean;
  /** Content to display inside the block */
  children: React.ReactNode;
};

export const PageBlock: React.FC<PageBlockProps> = ({ pinned = false, children }) => {
  return (
    <View
      className={`rounded border p-4 ${pinned ? "bg-primary/10 border-primary" : "bg-neutral border-neutral"} ${pinned ? "shadow-lg" : ""}`}
    >
      {pinned && (
        <View className="absolute -right-2 -top-2">
          {/* Simple pin representation */}
          <View className="bg-secondary h-3 w-3 rounded-full" />
        </View>
      )}
      <Text className="text-primary mb-2 font-medium">{pinned ? "Pinned" : "Page"}</Text>
      {children}
    </View>
  );
};
