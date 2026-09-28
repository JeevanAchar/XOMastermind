import type { ButtonProps } from "@c-types/ButtonProps";
import { COLORS } from "@constants/theme";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

/**
 * Reusable button component using Tailwind (NativeWind).
 * Supports `default` (primary background) and `secondary` (white background) variants.
 * The `Icon` prop can be a React component (e.g., an icon from lucide-react-native).
 */
export const ReusableButton: React.FC<ButtonProps> = ({
  Icon,
  className,
  onPress,
  disabled = false,
  variant = "default",
  children,
}) => {
  const isDefault = variant === "default";

  // Base Tailwind classes for the button container
  const baseClasses = "flex-row items-center justify-center py-2 px-4 rounded-md";
  const variantClasses = isDefault ? "bg-primary border border-primary" : "bg-white"; // secondary variant
  const disabledClasses = disabled ? "opacity-50" : "";
  const combinedClassName = `${baseClasses} ${variantClasses} ${disabledClasses} ${className ?? ""}`;

  // Text color depends on variant
  const textColor = isDefault ? "text-white" : "text-black";

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} className={combinedClassName}>
      <View className="flex-row items-center">
        {Icon &&
          // If Icon is a React element, render directly; if it's a component, instantiate it
          (React.isValidElement(Icon) ? (
            Icon
          ) : (
            <Icon size={20} color={isDefault ? COLORS.white : COLORS.black} />
          ))}
        <Text className={`${textColor} ml-2 text-base font-semibold`}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};
