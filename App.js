import { StyleSheet, View } from "react-native";
import { theme } from "./src/infrastructure/theme";
import { Text } from "./src/componets/typography/text.component";
import { RestaurantScreen } from "./src/features/restaurants/screen/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useoswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { SafeArea } from "./src/componets/utilities/safe-area.component";
import { RestaurantTitle } from "./src/features/restaurants/components/restaurant-info-card.sytles";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Foundation } from "@expo/vector-icons";

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

const TAB_ICON = {
  Restaurant: "restaurant",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

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
    <SafeArea>
      <ThemeProvider theme={theme}>
        <RestaurantTitle>
          <Text variant="appName">Meals To Go</Text>
        </RestaurantTitle>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurant" component={RestaurantScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeArea>
  );
}
