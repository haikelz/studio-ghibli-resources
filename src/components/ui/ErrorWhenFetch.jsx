import { SafeAreaView, StatusBar, Text } from "react-native";

export default function ErrorWhenFetch() {
  return (
    <SafeAreaView
      style={{
        padding: 15,
        backgroundColor: "#1c1c1c",
        minHeight: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar />
      <Text
        style={{ fontFamily: "Inter_700Bold", fontSize: 20, color: "#e5e7eb" }}
      >
        Loading....
      </Text>
    </SafeAreaView>
  );
}
