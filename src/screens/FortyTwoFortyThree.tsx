import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FortyTwoFortyThree = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        paddingBottom:
          Platform.OS === "android" ? Math.max(insets.bottom, 30) : 0,
      }}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>I Morgen Er Verden Vor</Text>
        <Text style={styles.text}>
          Se solen, der skinner på kalv og på kid.
        </Text>
        <Text style={styles.text}>Se parken, der dufter af vår.</Text>
        <Text style={styles.text}>Nu sammen vi hilser den nye tid.</Text>
        <Text style={styles.text}>I morgen er verden vor! (AALBORG!)</Text>

        <Text style={styles.text}>Professoren giver af alt hvad han ved.</Text>
        <Text style={styles.text}>Studerende sandheden får. (NÆSTE ÅR!)</Text>
        <Text style={styles.text}>Og æren den venter på os et sted.</Text>
        <Text style={styles.text}>I morgen er verden vor! (AALBORG!)</Text>

        <Text style={styles.text}>
          Der tastes og kigges på skærmene - se! (++!)
        </Text>
        <Text style={styles.text}>Det spirer, hvor Haarder han sår.</Text>
        <Text style={styles.text}>Men snart hvisker alle BRUG E D B</Text>
        <Text style={styles.text}>I MORGEN ER VERDEN VOR! (AALBORG!)</Text>

        <Text style={styles.chorus}>ÅH EDB, EDB, DU ER DET ORD,</Text>
        <Text style={styles.chorus}>
          DER FØRER OS FREM MOD DE ÅR, (OG CHANEL!)
        </Text>
        <Text style={styles.chorus}>HVOR VERDEN BLI'R STYRET AF DATALOG'R</Text>
        <Text style={styles.chorus}>I MORGEN ER VOR</Text>
        <Text style={styles.chorus}>I MORGEN ER VOR</Text>
        <Text style={styles.chorus}>I MORGEN ER VERDEN VOR!! (AALBORG!)</Text>

        <Text style={styles.title}>62(1/2)80</Text>

        <Text style={styles.text}>Må vi spy i datamaten,</Text>
        <Text style={styles.text}>må vi tæve den med køller</Text>
        <Text style={styles.text}>må vi smadre automaten</Text>
        <Text style={styles.text}>for at få en masse øller</Text>
        <Text style={styles.text}>må vi gå til forelæsning</Text>
        <Text style={styles.text}>i DIKUs høje sale</Text>
        <Text style={styles.text}>må vi råbe øv og foo og bar</Text>
        <Text style={styles.text}>og håndkøre som gale</Text>

        <Text style={styles.text}>Ja ja ja ja ja - det må vi gerne</Text>

        <Text style={styles.text}>Ørhn Ørhn hent hent skål skål spy spy</Text>
        <Text style={styles.text}>
          toogtredshalvfirs hent skål skål spy spy
        </Text>
        <Text style={styles.text}>- det var flot!</Text>

        <Text style={styles.text}>Ja det må vi godt!</Text>

        <Text style={styles.text}>SÅDAN DER!</Text>
        <Text style={styles.text}>OKAY!</Text>
        <Text style={styles.text}>SKÅÅÅÅL!... SKÅÅLLL!</Text>
        <Text style={styles.text}>1! 2! 3!</Text>
        <Text style={styles.text}>KODE KODE, KODE KODE KODE!</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    alignItems: "center",
    paddingBottom: 60,
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "black",
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
    color: "black",
  },
  chorus: {
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 5,
    textAlign: "center",
    color: "black",
  },
});

export default FortyTwoFortyThree;
