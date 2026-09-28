import { ArrowLeft, BookOpen, Mic, Play, Trophy } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

// Define supported icon names; extend as needed.
export type IconButtonName = "play" | "trophy" | "notebook" | "back" | "mic";

interface IconButtonProps {
  /** Which icon to render */
  name: IconButtonName;
  /** Optional press handler */
  onPress?: () => void;
  /** Highlight as active (e.g., selected tab) */
  isActive?: boolean;
}

/**
 * Reusable icon‑only button.
 *
 * - Fixed width/height (40 × 40) – applied via inline style because NativeWind cannot
 *   parse arbitrary values inside template literals.
 * - Uses `flex-none` so it does not stretch inside a flex container.
 * - Background / border colors follow the design system:
 *   * active   → primary background & border, primary‑colored icon
 *   * inactive → dark background & gray border, white‑colored icon
 */
export const IconButton: React.FC<IconButtonProps> = ({ name, onPress }) => {
  // Icon always blue as requested
  const iconColor = "#1e293b";
  const iconSize = 24; // fits within 50×50 container
  const renderIcon = () => {
    switch (name) {
      case "play":
        return <Play size={iconSize} color={iconColor} />;
      case "trophy":
        return <Trophy size={iconSize} color={iconColor} />;
      case "notebook":
        return <BookOpen size={iconSize} color={iconColor} />;
      case "back":
        return <ArrowLeft size={iconSize} color={iconColor} />;
      case "mic":
        return <Mic size={iconSize} color={iconColor} />;
    }
  };

  // Fixed layout: gray-700 background and border, blue icon
  const buttonClasses = `flex-none items-center justify-center border border-gray-700 `;
  const buttonStyle = { width: 50, height: 50 };

  return (
    <TouchableOpacity onPress={onPress} className={buttonClasses} style={buttonStyle}>
      {renderIcon()}
    </TouchableOpacity>
  );
};
