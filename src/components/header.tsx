import { Badge } from "@components/ui/badge";
import { COLORS } from "@constants/theme";
import { Text, View } from "react-native";

export interface HeaderProps {
  title: string;
  subtitle?: string;
  badgeText?: string;
  className?: string;
}

export function Header({ title, badgeText, className, subtitle }: Readonly<HeaderProps>) {
  return (
    <View className={`mb-6 w-full ${className}`} style={{ backgroundColor: COLORS.canvas }}>
      <View className="mb-1 flex-row items-center justify-between">
        <Text className="text-2xl font-bold tracking-tight text-white">{title}</Text>
        {badgeText && <Badge label={badgeText} variant="purple" />}
      </View>
      {subtitle && <Text className="text-sm leading-relaxed text-slate-400">{subtitle}</Text>}
    </View>
  );
}

export default Header;
