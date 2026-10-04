import React, { useState, useEffect } from "react";
import { Image, Text, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CafeCam = () => {
  const baseUrl = "https://cafeen.org/api/webcam-low";
  const refreshInterval = 5000; // Refresh every 5 seconds

  const [imageUrl, setImageUrl] = useState(
    `${baseUrl}?${new Date().getTime()}`
  );
  const [countdown, setCountdown] = useState(refreshInterval / 1000);

  useEffect(() => {
    // Interval to refresh the image
    const imageInterval = setInterval(() => {
      const newImageUrl = `${baseUrl}?${new Date().getTime()}`;
      setImageUrl(newImageUrl);
      setCountdown(refreshInterval / 1000);
    }, refreshInterval);

    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => Math.max(0, prevCountdown - 1)); // Prevents countdown from going below zero
    }, 1000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.timer}>
        {"Opdaterer om " +
          countdown +
          (countdown === 1 ? " sekund" : " sekunder")}
      </Text>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  timer: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    position: "absolute",
    top: screenHeight * 0.25,
    zIndex: 1,
  },
});

export default CafeCam;
