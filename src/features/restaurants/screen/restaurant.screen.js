import React from "react";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from 'react-native';
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.componet";


const RestaurantSearch = styled(View)`
  width: 410px;
  justify-content: center;
  padding: 10px;

`;
const RestaurantFoodList = styled(View)`
  flex: 1;
  width: 410px;
  height: 100px;
  background-color: blue;
  padding: 20px;

`

export const RestaurantScreen = () => (
    <>

    <RestaurantSearch>
      <Searchbar/>
    </RestaurantSearch>

    <RestaurantFoodList>
      <RestaurantInfo/>
    </RestaurantFoodList>
    
      
    </>
)
    

const styles = StyleSheet.create({
    container: {
     
     flex: 1,
     //justifyContent: "center",
     backgroundColor: "white",
     paddingTop:20,
    //  paddingBottom: 20
    }
    
  });