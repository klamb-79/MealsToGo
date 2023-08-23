import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet} from "react-native";
import { Card } from "react-native-paper";


const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
    
    color: ${(props) => props.theme.colors.ui.primary};

`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[2]};
`
const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`




export const RestaurantInfo = ({restaurant = {}}) =>  {

    const{
        name = 'Heritage Coffee House + Tea Bar ',
        icon = '../assets/heritageCoffeeHouse/logo.jpg',
        photos = [
            "https://scontent.fbze2-1.fna.fbcdn.net/v/t39.30808-6/364776055_619632136947334_596166775466349214_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NvFwFHT-zFsAX-uOwGD&_nc_ht=scontent.fbze2-1.fna&oh=00_AfCWg3nMv83jOtSiSWCJ20_bzpkpGI_hVx4fU2ut4udu3w&oe=64EC059E"],
        address = 'Constitution Drive Belmopan',
        isOpenNow = true,
        rating = 4,
        isCloseTemorarily,
    } = restaurant
    return(

        <RestaurantCard elevation = {5}>
            <RestaurantCardCover key={name} source={{uri: photos[0] }}/>
            <Info>
                <Title>{name}</Title>
                <Address>{address}</Address>
            </Info>
            
        </RestaurantCard>    
       
    );
};

 




     