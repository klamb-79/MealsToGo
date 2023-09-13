import React from "react";
import { Spacer } from "../../../componets/spacer/spacer.componet";
import { Text } from "../../../componets/typography/text.component";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Address,
  Rating,
  Section,
  SectionEnd,
  Open,
} from "./restaurant-info-card.sytles";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Heritage Coffee House + Tea Bar ",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
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
        <Text variant="label">{name}</Text>

        <Section>
          <Rating>
            {ratingArray.map(() => (
              <Open xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <Open xml={open} width={30} height={30} />}
            </Spacer>

            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
