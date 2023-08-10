import React from "react";
import styled from "styled-components/native"
import { Text, StyleSheet, ImageView} from "react-native";
import { Card } from "react-native-paper";


const Title =styled.Text`
    padding: 16px;
    color: green
`;



export const RestaurantInfo = ({restaurant = {}}) =>  {

    const{
        name = 'Heritage Coffee House + Tea Bar',
        icon = '../assets/heritageCoffeeHouse/logo.jpg',
        photos = [
            'https://scontent.fbze2-1.fna.fbcdn.net/v/t39.30808-6/363992764_615373037373244_1908738115670374700_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=DdpZOFb1X_8AX8eO6xx&_nc_ht=scontent.fbze2-1.fna&oh=00_AfCTHHstWduS8gr3xAfAx6NcQ0AZS14KuN1bZqEZOAEE-g&oe=64D8A49C'],
        address = "Constitution Drive Belmopan",
        isOpenNow = true,
        rating = 4,
        isCloseTemorarily
    } = restaurant
    return(
        <Card elevation={5} style={styles.card} >
        <Card.Cover key={name} style={styles.cover} source={{uri: photos[0] }}/>
        <Title>{name}</Title>
        </Card>
    )
}

const styles = StyleSheet.create ({
    card: {
        backgroundColor: 'white',
    },
    cover: {
        padding: 20,
        backgroundColor: 'white'

    }
   
})




    

