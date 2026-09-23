import { Text, View } from "react-native";

export type BadgeVariant = "default" | "success" | "warning" | "info" | "purple";

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
  textClassName?: string;
}

const variantStyles: Record<BadgeVariant, { container: string; text: string }> = {
  default: {
    container: "bg-slate-800 border-slate-700",
    text: "text-slate-300",
  },
  success: {
    container: "bg-emerald-500/10 border-emerald-500/30",
    text: "text-emerald-400",
  },
  warning: {
    container: "bg-amber-500/10 border-amber-500/30",
    text: "text-amber-400",
  },
  info: {
    container: "bg-sky-500/10 border-sky-500/30",
    text: "text-sky-400",
  },
  purple: {
    container: "bg-indigo-500/10 border-indigo-500/30",
    text: "text-indigo-400",
  },
};

export function Badge({
  label,
  variant = "default",
  className = "",
  textClassName = "",
}: BadgeProps) {
  const currentVariant = variantStyles[variant];

  return (
    <View
      className={`items-center justify-center rounded-full border px-2.5 py-1 ${currentVariant.container} ${className}`}
    >
      <Text className={`text-xs font-medium tracking-wide ${currentVariant.text} ${textClassName}`}>
        {label}
      </Text>
    </View>
  );
}
