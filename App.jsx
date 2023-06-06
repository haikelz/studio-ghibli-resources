import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Films from "./src/pages/Films";
import FilmDetails from "./src/pages/Films/Details";
import Home from "./src/pages/Home";
import Locations from "./src/pages/Locations";
import People from "./src/pages/People";
import Species from "./src/pages/Species";
import Vehicles from "./src/pages/Vehicles";

const GlobalTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1c1c1c",
    background: "#1c1c1c",
  },
};

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer theme={GlobalTheme}>
      <Stack.Navigator
        screenOptions={{ animation: "none" }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Films"
          component={Films}
          options={{ title: "Films List" }}
        />
        <Stack.Screen
          name="FilmDetails"
          component={FilmDetails}
          options={({ route }) => ({
            id: route.params.id,
            title: route.params.title,
          })}
        />
        <Stack.Screen
          name="Locations"
          component={Locations}
          options={{ title: "Locations List" }}
        />
        <Stack.Screen
          name="People"
          component={People}
          options={{ title: "People List" }}
        />
        <Stack.Screen
          name="Species"
          component={Species}
          options={{ title: "Species List" }}
        />
        <Stack.Screen
          name="Vehicles"
          component={Vehicles}
          options={{ title: "Vehicles List" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
