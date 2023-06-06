import { memo } from "react";
import { FlatList, Image, Text, View } from "react-native";
import Lightbox from "react-native-lightbox-v2";
import BackButton from "../../components/ui/BackButton";
import ErrorWhenFetch from "../../components/ui/ErrorWhenFetch";
import Layout from "../../components/ui/Layout";
import Loading from "../../components/ui/Loading";
import { useFetch, useFontsLoaded } from "../../hooks";

export default function Films({ navigation }) {
  const fontsLoaded = useFontsLoaded();

  const { data, isLoading, isError } = useFetch(
    "https://ghibli-api.vercel.app/api/films"
  );

  if ((!data && !isError) || isLoading) return <Loading />;
  if (isError || typeof data.data === "undefined") return <ErrorWhenFetch />;

  if (!fontsLoaded) return null;

  return (
    <Layout>
      <View style={{ width: "100%" }}>
        <MemoizedList data={data} navigation={navigation} />
      </View>
    </Layout>
  );
}

const MemoizedList = memo(({ data, navigation }) => {
  return (
    <FlatList
      ListHeaderComponent={() => (
        <View style={{ marginBottom: 15 }}>
          <Text
            style={{
              color: "#e5e7eb",
              fontSize: 35,
              fontFamily: "Inter_700Bold",
              textAlign: "center",
            }}
          >
            Films List
          </Text>
          <Text
            style={{
              color: "#e5e7eb",
              fontSize: 17,
              fontFamily: "Inter_400Regular",
              textAlign: "center",
            }}
          >
            Studio Ghibli Films list
          </Text>
        </View>
      )}
      ListFooterComponent={() => <BackButton route="Home" />}
      style={{
        borderColor: "#374151",
        padding: 15,
      }}
      data={data.data}
      key={({ item }) => item.id}
      renderItem={({ item }) => (
        <View
          style={{
            marginBottom: 30,
            overflow: "hidden",
            borderRadius: 10,
            backgroundColor: "#000",
            borderWidth: 0.5,
            borderColor: "#4b5563",
          }}
        >
          <Lightbox>
            <Image
              source={{ uri: item.image }}
              style={{
                width: "100%",
                height: 250,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              alt={item.title}
            />
          </Lightbox>
          <View style={{ padding: 15 }}>
            <Text
              style={{
                fontFamily: "IBMPlexSansJP_500Medium",
                color: "#e5e7eb",
                fontSize: 16,
              }}
            >
              {item.original_title}
            </Text>
            <Text
              style={{
                fontWeight: 700,
                color: "#e5e7eb",
                marginTop: 5,
                fontSize: 25,
              }}
              onPress={() =>
                navigation.navigate("FilmDetails", {
                  id: item.id,
                  title: item.title,
                })
              }
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 17,
                lineHeight: 25,
                color: "#e5e7eb",
                marginTop: 13,
                marginBottom: 13,
                fontFamily: "Inter_400Regular",
              }}
            >
              {`${item.description.slice(0, 200)}....`}
            </Text>
            <Text
              style={{
                fontSize: 17,
                color: "#e5e7eb",
                fontFamily: "Inter_400Regular",
              }}
            >
              <Text style={{ fontFamily: "Inter_700Bold", color: "#e5e7eb" }}>
                Score:{" "}
              </Text>{" "}
              {item.rt_score}
            </Text>
          </View>
        </View>
      )}
    />
  );
});
