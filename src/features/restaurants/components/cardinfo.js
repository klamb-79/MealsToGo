import  React from 'react';
import { Card } from 'react-native-paper';
import { StyleSheet, Text} from 'react-native';
import { RestaurantInfo, restaurant  } from './restaurant-info.componet';


export const MyCard = () => (
  <Card style = {style.container}>
    <Card.Cover source={{ uri: 'https://fastly.picsum.photos/id/618/700/700.jpg?hmac=rBof7hHzmrMtkrEhe7txJCRox5I6Yr0zFnCR6yET-Xw' }} />
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