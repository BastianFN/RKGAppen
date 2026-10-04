import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const IsItTuesday = () => {
  const [isTuesday, setIsTuesday] = useState(false);

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0-indexed
    setIsTuesday(dayOfWeek === 2); // Set to true if it's tirsdag
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {isTuesday ? (
          <Text style={styles.text}>ja</Text>
        ) : (
          <Text style={styles.text}>nej</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const brandBannerHeight = 50 + 35; // paddingTop + paddingBottom in BrandBanner styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  image: {
    width: windowWidth,
    height: windowHeight - brandBannerHeight,
    resizeMode: "cover",
  },
});

export default IsItTuesday;
