import { Image, ScrollView, Text, View } from "react-native";
import Lightbox from "react-native-lightbox-v2";
import BackButton from "../../../components/ui/BackButton";
import ErrorWhenFetch from "../../../components/ui/ErrorWhenFetch";
import Layout from "../../../components/ui/Layout";
import Loading from "../../../components/ui/Loading";
import { useFetch, useFontsLoaded } from "../../../hooks";

export default function FilmDetails({ route }) {
  const { id, title } = route.params;
  const { data, isLoading, isError } = useFetch(
    `https://ghibli-api.vercel.app/api/films/${id}`
  );

  const fontsLoaded = useFontsLoaded();

  if (!fontsLoaded) return null;
  if ((!data && !isError) || isLoading) return <Loading />;
  if (isError || typeof data.data === "undefined") return <ErrorWhenFetch />;

  const film = data.data;

  return (
    <Layout>
      <ScrollView style={{ width: "100%" }}>
        <View style={{ padding: 15, marginTop: 5, width: "100%" }}>
          <Lightbox>
            <Image
              source={{ uri: film.image }}
              style={{ width: "100%", height: 250, borderRadius: 10 }}
              alt={film.title}
            />
          </Lightbox>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <Text
            style={{
              fontWeight: 700,
              lineHeight: 25,
              color: "#e5e7eb",
              marginTop: 5,
              marginBottom: 20,
              fontSize: 25,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "#e5e7eb",
              fontSize: 17,
              fontFamily: "Inter_400Regular",
            }}
          >
            <Text style={{ fontFamily: "Inter_700Bold" }}>Director: </Text>
            {film.director}
          </Text>
          <Text
            style={{
              color: "#e5e7eb",
              fontSize: 17,
              fontFamily: "Inter_400Regular",
              marginVertical: 3,
            }}
          >
            <Text style={{ fontFamily: "Inter_700Bold" }}>Producer: </Text>
            {film.producer}
          </Text>
          <Text
            style={{
              color: "#e5e7eb",
              fontSize: 17,
              fontFamily: "Inter_400Regular",
            }}
          >
            <Text style={{ fontFamily: "Inter_700Bold" }}>Release Date: </Text>
            {film.release_date}
          </Text>
          <Text
            style={{
              color: "#e5e7eb",
              fontSize: 17,
              fontFamily: "Inter_400Regular",
              marginVertical: 3,
            }}
          >
            <Text style={{ fontFamily: "Inter_700Bold" }}>Score: </Text>
            {film.rt_score}
          </Text>
          <Text
            style={{
              marginBottom: 30,
              color: "#e5e7eb",
              fontSize: 17,
              fontFamily: "Inter_400Regular",
            }}
          >
            <Text style={{ fontFamily: "Inter_600SemiBold", lineHeight: 25 }}>
              Description:{" "}
            </Text>
            {film.description}
          </Text>
          <BackButton route="Films" />
        </View>
      </ScrollView>
    </Layout>
  );
}
