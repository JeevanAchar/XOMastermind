import { BookOpen, Play, Trophy } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

// Footer button definition interface
interface FooterButtonData {
  key: string;
  label: string;
  iconName: "play" | "trophy" | "notebook";
}

// Reusable FooterButton component
interface FooterButtonProps {
  iconName: "play" | "trophy" | "notebook";
  label: string;
  isActive: boolean;
  onPress: () => void;
}

const FooterButton: React.FC<FooterButtonProps> = ({ iconName, label, isActive, onPress }) => {
  const iconColor = isActive ? "#000000" : "#6b7280";
  const textColor = isActive ? "#000000" : "#6b7280";

  const IconComponent = (() => {
    switch (iconName) {
      case "play":
        return <Play size={20} color={iconColor} />;
      case "trophy":
        return <Trophy size={20} color={iconColor} />;
      case "notebook":
        return <BookOpen size={20} color={iconColor} />;
    }
  })();

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`max-w-[80px] flex-1 items-center rounded-md border py-2 ${isActive ? "border-gray-700 bg-[#fef08a]" : "border-transparent"}`}
    >
      {IconComponent}
      <Text className={`mt-1 text-xs ${textColor}`}>{label}</Text>
    </TouchableOpacity>
  );
};

export const Footer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("play");

  const footerItems: FooterButtonData[] = [
    { key: "play", label: "Play", iconName: "play" },
    { key: "trophy", label: "Trophies", iconName: "trophy" },
    { key: "notebook", label: "Notebook", iconName: "notebook" },
  ];

  return (
    <View className="border-t border-t-gray-700 text-gray-500">
      <View className="w-full flex-row items-center justify-around py-2">
        {footerItems.map((item) => (
          <FooterButton
            key={item.key}
            iconName={item.iconName as any}
            label={item.label}
            isActive={activeTab === item.key}
            onPress={() => setActiveTab(item.key)}
          />
        ))}
      </View>
    </View>
  );
};
