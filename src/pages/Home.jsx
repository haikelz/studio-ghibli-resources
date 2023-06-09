import { Image, Pressable, Text, View } from "react-native";
import Layout from "../components/ui/Layout";

const linkList = [
  { id: 1, route: "Films" },
  { id: 2, route: "Locations" },
  { id: 3, route: "People" },
  { id: 4, route: "Species" },
  { id: 5, route: "Vehicles" },
];

export default function Home({ navigation }) {
  return (
    <Layout>
      <View
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: "https://cdn.myanimelist.net/images/company/21.png" }}
          style={{ width: "100%", height: 250 }}
        />
        <View
          style={{
            marginTop: 10,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Inter_700Bold",
              color: "#e5e7eb",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Studio Ghibli Resources
          </Text>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 10,
              width: "100%",
            }}
          >
            {linkList.map((item) => (
              <Pressable
                key={item.id}
                style={{ marginRight: item.route !== "Vehicles" ? 13 : 0 }}
                title={`Go to ${item.route}`}
                onPress={() => navigation.navigate(item.route)}
              >
                <Text
                  style={{
                    color: "#e5e7eb",
                    textDecorationStyle: "solid",
                    textDecorationLine: "underline",
                    textDecorationColor: "#fff",
                    fontFamily: "Inter_700Bold",
                  }}
                >
                  {item.route}↗
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </Layout>
  );
}
