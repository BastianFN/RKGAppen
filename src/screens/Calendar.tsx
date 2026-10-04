import React from "react";
import { StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Calendar = () => {
  const insets = useSafeAreaInsets();
  const googleCalendarUri =
    "https://calendar.google.com/calendar/embed?src=ruskursusgruppen%40gmail.com&ctz=Europe%2FCopenhagen";

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 10,
        backgroundColor: "#fff",
        paddingBottom:
          Platform.OS === "android" ? Math.max(insets.bottom, 30) : 0,
      }}
    >
      <WebView
        source={{ uri: googleCalendarUri }}
        style={styles.calendarWebView}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  calendarWebView: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
});
