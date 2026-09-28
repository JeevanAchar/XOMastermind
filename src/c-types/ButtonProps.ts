import type { LucideProps } from "lucide-react-native";
import type * as React from "react";

export type ButtonProps = {
  /**
   * Icon component from lucide-react-native or any React element.
   */
  Icon?: React.ComponentType<LucideProps> | React.ReactElement;
  /**
   * Additional CSS classes (tailwind or custom) to apply to the button container.
   */
  className?: string;
  /**
   * Function to call when the button is pressed.
   */
  onPress?: () => void;
  /**
   * If true, the button is disabled and non‑interactive.
   */
  disabled?: boolean;
  /**
   * Determines visual style. "default" shows background color with border;
   * "secondary" shows white background without border.
   */
  variant?: "default" | "secondary" | "danger";
  children?: React.ReactNode;
};
