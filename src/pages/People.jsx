import { memo } from "react";
import { FlatList, Text, View } from "react-native";
import CardWrapper from "../components/ui/CardWrapper";
import ErrorWhenFetch from "../components/ui/ErrorWhenFetch";
import Layout from "../components/ui/Layout";
import Loading from "../components/ui/Loading";
import { useFetch } from "../hooks";

export default function People() {
  const { data, isLoading, isError } = useFetch(
    "https://ghibli-api.vercel.app/api/people"
  );

  if ((!data && !isError) || isLoading) return <Loading />;
  if (isError || typeof data.data === "undefined") return <ErrorWhenFetch />;

  return (
    <Layout>
      <View style={{ width: "100%" }}>
        <MemoizedList data={data} />
      </View>
    </Layout>
  );
}

const MemoizedList = memo(({ data }) => {
  return (
    <FlatList
      ListHeaderComponent={() => (
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{
              color: "#e5e7eb",
              fontSize: 35,
              fontFamily: "Inter_700Bold",
              textAlign: "center",
            }}
          >
            People List
          </Text>
          <Text
            style={{
              color: "#e5e7eb",
              fontSize: 17,
              fontFamily: "Inter_400Regular",
              textAlign: "center",
            }}
          >
            Studio Ghibli People list
          </Text>
        </View>
      )}
      style={{ padding: 15 }}
      data={data.data}
      key={({ item }) => item.id}
      renderItem={({ item }) => (
        <CardWrapper>
          <Text
            style={{
              fontFamily: "Inter_700Bold",
              color: "#e5e7eb",
              marginTop: 5,
              fontSize: 25,
            }}
          >
            {item.name}
          </Text>
          <View style={{ marginTop: 15 }}>
            <Text
              style={{
                marginTop: 3,
                marginBottom: 3,
                fontSize: 17,
                color: "#e5e7eb",
                fontFamily: "Inter_400Regular",
              }}
            >
              <Text style={{ fontFamily: "Inter_700Bold", color: "#e5e7eb" }}>
                Gender:{" "}
              </Text>{" "}
              {item.gender}
            </Text>
            <Text
              style={{
                marginTop: 3,
                marginBottom: 3,
                fontSize: 17,
                color: "#e5e7eb",
                fontFamily: "Inter_400Regular",
              }}
            >
              <Text style={{ fontFamily: "Inter_700Bold", color: "#e5e7eb" }}>
                Age:{" "}
              </Text>{" "}
              {item.age}
            </Text>
          </View>
        </CardWrapper>
      )}
    />
  );
});
