import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";

const SettingsButton = ({
  onPress,
  isOpen,
}: {
  onPress: () => void;
  isOpen: boolean;
}) => {

  const rotateAnim = useRef(new Animated.Value(0)).current;

  // Trigger the animation based on the isOpen prop
  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: true, // Use native driver for better performance i guess
    }).start();
  }, [isOpen, rotateAnim]);

  // Interpolate rotation value
  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"], // Rotate from 0 to 180 degrees
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={{ transform: [{ rotate: rotation }] }}>
        <Svg width={28} height={28} viewBox="0 0 24 24">
          <Path
            d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.40-1.08-.73-1.69-.98l-.38-2.65C14.84 2.12 14.52 2 14.18 2h-4.36c-.34 0-.66.12-.9.35l-.38 2.65c-.61.25-1.17.58-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.64-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.40 1.08.73 1.69.98l.38 2.65c.24.23.56.35.9.35h4.36c.34 0 .66-.12.9-.35l.38-2.65c.61-.25 1.17-.58 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
            fill="#fff"
          />
        </Svg>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default SettingsButton;
