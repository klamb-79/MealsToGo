import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from "react-native-paper";


export const ResaurantScreen = () => (
    <>
    <View style={styles.search}>
      <Searchbar />
      </View >
      <View style={styles.foodlist}>
        <Text style={{padding: 15}}>list</Text>
      </View >
    </>
)
    

const styles = StyleSheet.create({
    container: {
     
     flex: 1,
     //justifyContent: "center",
     backgroundColor: "white",
     paddingTop:20,
    //  paddingBottom: 20
    },
    search:{
      //flexDirection: 'column',
      width: 410,
      justifyContent: "center",
      //height: 30,
      padding: 15,
      //backgroundColor: "green"
  
    },
    foodlist:{
      flex: 1,
      width: 410,
      height: 100,
      backgroundColor: "blue"
    }
  });