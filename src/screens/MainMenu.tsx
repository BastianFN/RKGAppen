import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const MainMenu = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../img/logo.png")} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("4243")}
        >
          <Text style={styles.buttonText}>42/43</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("AdamEva")}
        >
          <Text style={styles.buttonText}>Adam & Eva</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("Calendar")}
        >
          <Text style={styles.buttonText}>Kalender</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("CafeCam")}
        >
          <Text style={styles.buttonText}>Caféen?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("IsItTuesday")}
        >
          <Text style={styles.buttonText}>Er det tirsdag?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingVertical: 110,
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  button: {
    backgroundColor: "#222224",
    borderRadius: 8,
    marginBottom: 12,
    width: "48%",
    alignItems: "center",
    height: 60,
    display: "flex",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 70,
  },
});

export default MainMenu;
