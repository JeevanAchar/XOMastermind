import { Badge } from "@components/ui/badge";
import { Text, View } from "react-native";

export interface HeaderProps {
  title: string;
  subtitle?: string;
  badgeText?: string;
  className?: string;
}

export function Header({ title, subtitle, badgeText, className = "" }: HeaderProps) {
  return (
    <View className={`mb-6 w-full ${className}`}>
      <View className="mb-1 flex-row items-center justify-between">
        <Text className="text-2xl font-bold tracking-tight text-white">{title}</Text>
        {badgeText && <Badge label={badgeText} variant="purple" />}
      </View>
      {subtitle && <Text className="text-sm leading-relaxed text-slate-400">{subtitle}</Text>}
    </View>
  );
}
