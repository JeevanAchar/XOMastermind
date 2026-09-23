import { ActivityIndicator, Pressable, PressableProps, Text } from "react-native";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends PressableProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  className?: string;
  textClassName?: string;
}

const variantStyles: Record<ButtonVariant, { container: string; text: string; ripple: string }> = {
  primary: {
    container: "bg-indigo-600 active:bg-indigo-700 shadow-md",
    text: "text-white font-semibold",
    ripple: "#4338ca",
  },
  secondary: {
    container: "bg-slate-800 active:bg-slate-700 border border-slate-700",
    text: "text-slate-100 font-medium",
    ripple: "#334155",
  },
  outline: {
    container: "bg-transparent border border-indigo-500/50 active:bg-indigo-500/10",
    text: "text-indigo-400 font-medium",
    ripple: "#6366f120",
  },
  ghost: {
    container: "bg-transparent active:bg-slate-800/60",
    text: "text-slate-400 font-medium",
    ripple: "#1e293b50",
  },
};

const sizeStyles: Record<ButtonSize, { container: string; text: string }> = {
  sm: {
    container: "py-2 px-3.5 rounded-lg",
    text: "text-xs",
  },
  md: {
    container: "py-3.5 px-5 rounded-xl",
    text: "text-sm",
  },
  lg: {
    container: "py-4 px-6 rounded-2xl",
    text: "text-base",
  },
};

export function Button({
  label,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  className = "",
  textClassName = "",
  ...rest
}: ButtonProps) {
  const currentVariant = variantStyles[variant];
  const currentSize = sizeStyles[size];

  return (
    <Pressable
      className={`flex-row items-center justify-center ${currentVariant.container} ${currentSize.container} ${
        disabled || isLoading ? "opacity-50" : ""
      } ${className}`}
      disabled={disabled || isLoading}
      android_ripple={{ color: currentVariant.ripple }}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={variant === "primary" ? "#ffffff" : "#818cf8"} />
      ) : (
        <Text className={`${currentVariant.text} ${currentSize.text} ${textClassName}`}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}
