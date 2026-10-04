import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import RNDeviceHeading from "react-native-device-heading";
import Geolocation from "@react-native-community/geolocation";
import LinearGradient from "react-native-linear-gradient";
import Sound from "react-native-sound";
import { LockIcon, UnlockIcon } from "../assets/locks";
import { RefreshIcon } from "../assets/refresh";

const targetLatitude = 55.70208302580189;
const targetLongitude = 12.561045577114438;

const CompassPage = () => {
  const degreesUpdateRate = 1; // number of degrees changed before callback is triggered
  const [deviceHeading, setDeviceHeading] = useState(0);
  const [currentPosition, setCurrentPosition] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [isLocked, setIsLocked] = useState(false);
  const [successSound, setSuccessSound] = useState<Sound | null>(null);

  useEffect(() => {
    startHeadingUpdates();

    Geolocation.getCurrentPosition(
      (position: any) => {
        setCurrentPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error: any) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    return () => {
      RNDeviceHeading.stop();
    };
  }, [isLocked]);

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  const startHeadingUpdates = () => {
    RNDeviceHeading.start(degreesUpdateRate, (degree) => {
      if (!isLocked) {
        setDeviceHeading(degree);
      }
    });
  };

  const refreshLocationAndHeading = () => {
    if (!isLocked) {
      RNDeviceHeading.stop(); // Stop heading updates to restart them
      startHeadingUpdates(); // Restart heading updates
    }
    // Should also refresh the location somehow - gl hf wit dat
  };


  const calculateBearing = (
    startLat: number,
    startLng: number,
    destLat: number,
    destLng: number
  ) => {

    startLat = degreesToRadians(startLat);
    startLng = degreesToRadians(startLng);
    destLat = degreesToRadians(destLat);
    destLng = degreesToRadians(destLng);

    const y = Math.sin(destLng - startLng) * Math.cos(destLat);
    const x =
      Math.cos(startLat) * Math.sin(destLat) -
      Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
    return (radiansToDegrees(Math.atan2(y, x)) + 360) % 360;
  };

  const degreesToRadians = (degrees: number) => {
    return degrees * (Math.PI / 180);
  };

  const radiansToDegrees = (radians: number) => {
    return radians * (180 / Math.PI);
  };

  // Adjust the compass to point to the target coordinates
  const bearingToTarget = calculateBearing(
    currentPosition.latitude,
    currentPosition.longitude,
    targetLatitude,
    targetLongitude
  );
  const adjustedHeading = (deviceHeading - bearingToTarget + 360) % 360;


  const isPointingAtTarget = adjustedHeading <= 6 || adjustedHeading >= 354;

  useEffect(() => {

    Sound.setCategory("Playback");

    const sound = new Sound(
      "drikLoop.mp3",
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          console.log("Failed to load the sound", error);
          return;
        }
        sound.setNumberOfLoops(-1);
        setSuccessSound(sound);
      }
    );

    return () => {
      sound.release(); // Cleanup
    };
  }, []);

  useEffect(() => {
    if (isPointingAtTarget) {
      successSound?.play((success) => {
        if (!success) {
          console.log("Playback failed due to audio decoding errors");
        }
      });
    } else {
      successSound?.stop();
    }
  }, [isPointingAtTarget, successSound]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.linearGradient}
      >
        <View style={styles.imageContainer}>
          {isPointingAtTarget && (
            <Text style={styles.targetText}>NED PÅ KNÆ</Text>
          )}
          <Image
            source={require("../img/compassrose.png")}
            style={{
              width: 550,
              height: 550,
              position: "absolute",
            }}
          />
          <Image
            source={require("../img/ice3.png")}
            style={{
              width: 250,
              height: 250,
              transform: [{ rotate: `-${adjustedHeading}deg` }],

              position: "absolute",
            }}
          />
          {isPointingAtTarget && (
            <TouchableOpacity onPress={toggleLock} style={styles.lockButton}>
              <Text style={styles.buttonText}>
                {isLocked ? <UnlockIcon /> : <LockIcon />}
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={refreshLocationAndHeading}
            style={styles.refreshButton}
          >
            <RefreshIcon />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 60,
  },
  linearGradient: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    height: "100%",
  },
  targetText: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    top: "-30%",
    zIndex: 1,
  },
  shadowContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "white",
    position: "absolute",
  },
  lockButton: {
    backgroundColor: "#222644",
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "5%",
  },
  refreshButton: {
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "5%",
    right: "5%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default CompassPage;
