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
