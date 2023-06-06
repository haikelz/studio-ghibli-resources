import { Link } from "@react-navigation/native";
import { Pressable, View } from "react-native";

export default function BackButton({ route }) {
  return (
    <View
      style={{
        marginBottom: 40,
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Pressable
        aria-label="back"
        style={{
          backgroundColor: "#fff",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 3,
        }}
        title={`Back to ${route}`}
      >
        <Link
          style={{
            fontFamily: "Inter_700Bold",
            fontSize: 17,
            color: "#1c1c1c",
          }}
          to={{ screen: route }}
        >
          Back
        </Link>
      </Pressable>
    </View>
  );
}
