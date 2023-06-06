import { View } from "react-native";

export default function CardWrapper({ children }) {
  return (
    <View
      style={{
        marginBottom: 30,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "#000",
        padding: 15,
        borderWidth: 0.5,
        borderColor: "#4b5563",
      }}
    >
      {children}
    </View>
  );
}
