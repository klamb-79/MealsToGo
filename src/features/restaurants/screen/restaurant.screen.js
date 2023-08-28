import React from "react";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.componet";

const RestaurantSearch = styled(View)`
  width: 410px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  justify-content: center;
  padding: ${(props) => props.theme.space[2]};
`;
const RestaurantFoodList = styled(View)`
  flex: 1;
  width: 410px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantTitle = styled(Text)`
  justify-content: center;
  text-align: center;
  padding-top: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => (
  <>
    <RestaurantTitle>Meals To Go</RestaurantTitle>
    <RestaurantSearch>
      <Searchbar />
    </RestaurantSearch>

    <RestaurantFoodList>
      <RestaurantInfo />
    </RestaurantFoodList>
  </>
);
