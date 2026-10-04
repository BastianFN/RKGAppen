import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";

const SettingsMenu = ({
  isSettingsModalVisible,
  toggleSettingsModal,
}: {
  isSettingsModalVisible: boolean;
  toggleSettingsModal: () => void;
}) => {
  // State to manage "About the App" visibility
  const [showAboutApp, setShowAboutApp] = useState(false);

  // Function to open dnur link
  const openHelpLink = () => {
    const url = "https://dnur.dk";
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isSettingsModalVisible}
      onRequestClose={toggleSettingsModal}
    >
      <TouchableWithoutFeedback onPress={toggleSettingsModal}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <SafeAreaView style={styles.safeAreaView}>
                <Text style={styles.headerText}>Indstillinger</Text>
                {/* Options */}
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => setShowAboutApp(true)}
                >
                  <Text style={styles.optionText}>Om appen</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={openHelpLink}
                >
                  <Text style={styles.optionText}>Få hjælp</Text>
                </TouchableOpacity>
                {/* Close Button */}
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={toggleSettingsModal}
                >
                  <Text style={styles.closeButtonText}>Luk</Text>
                </TouchableOpacity>
              </SafeAreaView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showAboutApp}
        onRequestClose={() => setShowAboutApp(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowAboutApp(false)}>
          <View style={styles.aboutAppOverlay}>
            <View style={styles.aboutAppModalView}>
              <Text style={styles.aboutAppText}>
                En ung og flot datalog blev den 27. oktober 2022 valgt ind i
                RKGs bestyrelse som kasse. Hans første punkt på dagsordenen: At
                lave en app. Denne app skulle gøre det nemmere for RKGs
                medlemmer at have et overblik over begivenhederne i foreningen
                og samtidig indføre et nyt voucher-system. Allerede 7 måneder
                senere, gik han igang med denne app. Han arbejdede hårdt og
                længe et par gange om måneden, og efter slid og slæb, var appen
                endelig færdig. Denne fantastiske app er resultatet af hans
                arbejde. Han er nu blevet en legende i RKGs historie, og navnet
                &quot;PB&quot; giver forevigt genlyd på DIKUs lange
                øvelsesgange.
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: "#1E1E1E",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: "40%",
  },
  safeAreaView: {
    flex: 1,
  },
  headerText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  optionButton: {
    marginBottom: 15,
    backgroundColor: "#2C2C2C",
    padding: 10,
    borderRadius: 10,
  },
  optionText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "#3A3A3A",
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  },
  aboutAppOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(24, 24, 27, 0.9)",
  },
  aboutAppModalView: {
    padding: 20,
    alignItems: "center",
  },
  aboutAppText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    lineHeight: 26,
  },
});

export default SettingsMenu;
