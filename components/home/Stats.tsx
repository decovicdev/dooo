import React from "react";
import {
  Box,
  chakra,
  Grid,
  Heading,
  HStack,
  Link,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { videoStats } from "../../data/mock";
import { Body1, Caption1, Caption2, SubTitle } from "../shared/typography";
import Container from "../shared/Container";
import Image from "../shared/Image";

interface StatsProps {}

const Stats: React.FC<StatsProps> = (props) => {
  return (
    <Container>
      <Grid
        mt={["4", "20"]}
        mx="auto"
        w="max-content"
        templateColumns={{
          base: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        bg="#373A49"
        color="#fff"
        borderRadius="xl"
        overflow="hidden"
      >
        <HStack bg="#373A49" w="260px" h="122px" justify="center">
          <Image src="/images/banner-stats.png" alt="Stats" />
          <SubTitle fontWeight="bold">Check stats</SubTitle>
        </HStack>

        <VStack
          justify="center"
          clipPath="polygon(20% 0, 100% 0%, 100% 100%, 0 100%)"
          h="122px"
          bg="#fff"
          color="#000"
        >
          <Caption1>Current plan</Caption1>
          <SubTitle>Gold Member</SubTitle>
        </VStack>
        <VStack
          spacing=".5"
          justify="center"
          clipPath="polygon(0 0, 100% 0%, 80% 100%, 0% 100%)"
          bg="#fff"
          color="#000"
          h="122px"
        >
          <Caption1>Payment Type</Caption1>
          <SubTitle>Onetime</SubTitle>
          <HStack>
            <Caption1>PayPal</Caption1>
            <Link
              href="#"
              color="#38A3E0"
              textDecorationColor="#38A3E0"
              textDecoration="underline"
            >
              change
            </Link>
          </HStack>
        </VStack>
        <HStack justify="center" bg="#373A49" w="260px" h="122">
          <Image src="/images/banner-xxx.png" alt="Stats" />
          <SubTitle fontWeight="bold">Redeem Codes</SubTitle>
        </HStack>
      </Grid>
      <VideoStats />
    </Container>
  );
};

const VideoStats: React.FC = () => {
  return (
    <Wrap mt="16" spacing="6" justify="center">
      {videoStats.map((item, index) => {
        return (
          <WrapItem key={index}>
            <VStack
              borderRadius="8px"
              w="248px"
              h="153"
              alignItems="center"
              justifyContent="center"
              bg="#CAEBF2"
            >
              <Heading>
                {item.stat + " "}
                {index === 2 && (
                  <Body1 as="span" fontWeight="semibold" color="#000">
                    hrs
                  </Body1>
                )}
              </Heading>
              {index === 0 && (
                <Caption2 fontWeight="semibold" color="#000">
                  Viewers watching
                </Caption2>
              )}
              <Heading fontWeight="extrabold">{item.title}</Heading>
            </VStack>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default Stats;
