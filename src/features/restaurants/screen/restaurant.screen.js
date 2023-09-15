import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.componet";

const RestaurantSearch = styled.View`
  width: 410px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  justify-content: center;
  padding: ${(props) => props.theme.space[1]};
`;
const RestaurantFoodList = styled.View`
  flex: 1;
  width: 410px;
  height: 5px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantScreen = () => (
  <>
    <RestaurantSearch>
      <Searchbar />
    </RestaurantSearch>

    <RestaurantFoodList>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
        //contentContainerStye={{ padding: 16 }}
      />
    </RestaurantFoodList>
  </>
);
