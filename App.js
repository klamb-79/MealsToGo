import { StyleSheet, Text, View } from 'react-native';
import { ResaurantScreen } from "./src/features/restaurants/screen/resaurant.screen";



export default function App() {
  return (
    <View style={styles.container}>
      <ResaurantScreen/>
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
