import  React from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet, Text} from 'react-native';
import { RestaurantInfo, restaurant  } from './restaurant-info.componet';


export const MyCard = () => (
  <Card style = {style.container}>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
        <Text>{restaurant}</Text>
    </Card.Content>
  </Card>
);

const style = StyleSheet.create ({
    container: {
        padding: 5
    }
})