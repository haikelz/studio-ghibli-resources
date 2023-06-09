import { SafeAreaView, StatusBar } from "react-native";

export default function Layout({ children }) {
  return (
    <SafeAreaView
      style={{
        minHeight: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <StatusBar />
      {children}
    </SafeAreaView>
  );
}
