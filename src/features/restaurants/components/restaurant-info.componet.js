import React from "react";
import styled from "styled-components/native";
import { Text, Image, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../componets/spacer/spacer.componet";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

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
  padding-bottom: ${(props) => props.theme.space[2]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
  flex-direction: row;
  align-itmes: center;
`;
const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const Open = styled(SvgXml)`
  flex-direction: row;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Heritage Coffee House + Tea Bar ",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://scontent.fbze2-1.fna.fbcdn.net/v/t39.30808-6/364776055_619632136947334_596166775466349214_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NvFwFHT-zFsAX-uOwGD&_nc_ht=scontent.fbze2-1.fna&oh=00_AfCWg3nMv83jOtSiSWCJ20_bzpkpGI_hVx4fU2ut4udu3w&oe=64EC059E",
    ],
    address = "Constitution Drive Belmopan",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>

        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <Open xml={open} width={30} height={30} />}
            </Spacer>

            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
