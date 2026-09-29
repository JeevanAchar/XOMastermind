import type { FooterProps, FooterTabKey } from "@c-types/FooterProps";
import { COLORS } from "@constants/theme";
import { BookOpen, Hash, Trophy } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface FooterButtonConfig {
  key: FooterTabKey;
  label: string;
  renderIcon: (color: string) => React.ReactNode;
}

/**
 * Footer renders the doodle bottom navigation bar matching Screenshot 2:
 * - White background with subtle top rule (#e2e8f0)
 * - 4 Navigation tabs:
 *   1. Play (# icon with active yellow highlighter pill & navy ink)
 *   2. Pass & Play (Users icon)
 *   3. Trophies (Trophy icon)
 *   4. Notebook (BookOpen icon)
 */
export const Footer: React.FC<FooterProps> = ({
  activeTab: controlledActiveTab,
  onTabChange,
  className = "",
}) => {
  const [internalTab, setInternalTab] = useState<FooterTabKey>("play");
  const currentTab = controlledActiveTab ?? internalTab;

  const handleSelectTab = (tab: FooterTabKey) => {
    setInternalTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  const tabs: FooterButtonConfig[] = [
    {
      key: "play",
      label: "Play",
      renderIcon: (color) => <Hash size={18} color={color} strokeWidth={2.4} />,
    },
    {
      key: "trophies",
      label: "Trophies",
      renderIcon: (color) => <Trophy size={18} color={color} strokeWidth={2} />,
    },
    {
      key: "notebook",
      label: "Notebook",
      renderIcon: (color) => <BookOpen size={18} color={color} strokeWidth={2} />,
    },
  ];

  return (
    <View
      className={`w-full border-t px-2 py-1.5 shadow-sm ${className}`}
      style={{
        backgroundColor: COLORS.white,
        borderColor: COLORS.borderRule,
      }}
    >
      <View className="flex-row items-center justify-around">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.key;
          const activeColor = COLORS.primaryNavy;
          const inactiveColor = COLORS.graphiteGray;
          const iconColor = isActive ? activeColor : inactiveColor;
          const textColor = isActive ? activeColor : inactiveColor;

          return (
            <TouchableOpacity
              key={tab.key}
              onPress={() => handleSelectTab(tab.key)}
              activeOpacity={0.8}
              className={`items-center justify-center rounded-md px-3 py-1.5 ${
                isActive ? "shadow-xs border" : "border-transparent"
              }`}
              style={{
                backgroundColor: isActive ? COLORS.manilaTape : "transparent",
                borderColor: isActive ? COLORS.tapeBorder : "transparent",
              }}
              accessibilityRole="tab"
              accessibilityState={{ selected: isActive }}
              accessibilityLabel={tab.label}
            >
              {tab.renderIcon(iconColor)}
              <Text
                className="mt-0.5 font-serif text-[11px] font-bold"
                style={{ color: textColor }}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
