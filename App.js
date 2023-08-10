import { StyleSheet, Text, View } from 'react-native';
import { RestaurantScreen } from "./src/features/restaurants/screen/restaurant.screen";



export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantScreen/>
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
