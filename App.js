import { StyleSheet, View } from "react-native";
import { theme } from "./src/infrastructure/theme";
import styled from "styled-components/native";
import { Text } from "./src/componets/typography/text.component";
import { RestaurantScreen } from "./src/features/restaurants/screen/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useoswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { RestaurantTitle } from "./src/features/restaurants/components/restaurant-info-card.sytles";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Map() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text variant="appName">Map!</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text variant="appName"> Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useoswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <RestaurantTitle>
          <Text variant="appName">Meals To Go</Text>
        </RestaurantTitle>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Resturant" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    backgroundColor: "white",
    paddingTop: 20,
    //  paddingBottom: 20
  },
});
