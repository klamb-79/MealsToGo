import { StyleSheet, Text, View } from 'react-native';
import{theme} from "./src/infrastructure/theme"
import { RestaurantScreen } from "./src/features/restaurants/screen/restaurant.screen";
import { ThemeProvider } from 'styled-components/native';
import {  useFonts as useoswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import {  useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';



export default function App() {
  let [oswaldLoaded] = useoswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if(!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ThemeProvider theme= {theme}>
        <RestaurantScreen/>
      </ThemeProvider>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
   flex: 1,
   //justifyContent: "center",
   backgroundColor: "white",
   paddingTop:20,
  //  paddingBottom: 20
  }
});
