import { ReusableButton } from "@components/ReusableButton";
import { TEXT } from "@constants/texts";
import { ArrowRight, Gamepad2 } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

type StartMatchButtonProps = {
  /** Callback when the button is pressed */
  onPress: () => void;
  /** Optional disabled state */
  disabled?: boolean;
};

/**
 * A button that starts a match. It displays a gamepad icon on the left,
 * the label from TEXT constants, and a right‑arrow on the right side.
 */
export const StartMatchButton: React.FC<StartMatchButtonProps> = ({ onPress, disabled }) => {
  return (
    <View className="my-3">
      <ReusableButton
        variant="default"
        onPress={onPress}
        disabled={disabled}
        Icon={<Gamepad2 size={20} color="white" />}
        className="startMatchBtn"
      >
        <View className="flex-1 flex-row items-center justify-between px-2">
          {/* Text */}
          <View className="flex-1 items-center">
            <Text className="text-base font-semibold text-white">{TEXT.START_MATCH}</Text>
          </View>
          {/* Right arrow */}
          <ArrowRight size={20} color="white" />
        </View>
      </ReusableButton>
    </View>
  );
};
