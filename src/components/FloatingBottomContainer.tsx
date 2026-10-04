import React, {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const FloatingBottomContainer = (props: PropsWithChildren<void>) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.floatingContainer,
        {bottom: Math.max(insets.bottom + 18, 28)},
      ]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  floatingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
});

export default FloatingBottomContainer;
