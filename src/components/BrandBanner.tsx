import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";
import SettingsButton from "./SettingsButton";
import SettingsMenu from "./SettingsMenu";
import { SafeAreaView } from "react-native-safe-area-context";

const BrandBanner = ({
  currentRouteName,
}: {
  back?: () => void;
  goHome?: () => void;
  currentRouteName?: string;
}) => {
  const [isSettingsModalVisible, setSettingsModalVisible] = useState(false);

  const toggleSettingsModal = () => {
    setSettingsModalVisible(!isSettingsModalVisible);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {currentRouteName !== "Home" && (
          <>
            <TouchableOpacity>
              <BackButton />
            </TouchableOpacity>
            <TouchableOpacity>
              <HomeButton />
            </TouchableOpacity>
          </>
        )}
        <TouchableOpacity>
          <SettingsButton
            onPress={toggleSettingsModal}
            isOpen={isSettingsModalVisible}
          />
        </TouchableOpacity>
      </View>
      <SettingsMenu
        isSettingsModalVisible={isSettingsModalVisible}
        toggleSettingsModal={toggleSettingsModal}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingTop: 15,
    paddingBottom: 35,
  },
});

export default BrandBanner;
