import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import Container from "../shared/Container";
import { Caption1, SubTitle, Title } from "../shared/typography";
import { addons } from "../../data/mock";
import Image from "../shared/Image";

interface PremiumAddonsProps {}

const PremiumAddons: React.FC<PremiumAddonsProps> = (props) => {
  return (
    <Box mt="12" p="6" bg="#FBF9F6" flex={1}>
      <Container>
        <Box textAlign="center" my="6">
          <Title>Premium Addons</Title>
          <SubTitle>Get powerful addons to boost experience</SubTitle>
        </Box>
        <AddonList />
        <Center mt="6">
          <Button
            w="92px"
            h="36px"
            rightIcon={
              <Image src="/images/more-arrow.png" alt="load more icon" />
            }
          >
            More
          </Button>
        </Center>
      </Container>
    </Box>
  );
};

const AddonList: React.FC = () => {
  return (
    <Wrap justify="center" spacing="4">
      {addons.map((add, index) => {
        return (
          <WrapItem
            p="5"
            w="534px"
            borderRadius="lg"
            h="200px"
            bg="#fff"
            key={add.color}
          >
            <HStack
              align="stretch"
              justify="space-between"
              p="5"
              borderRadius="lg"
              bg={add.bg}
              w="full"
              h="full"
            >
              <Box>
                <HStack>
                  {index === 1 ? (
                    <>
                      <Title>{add.title.bold}</Title>
                      <Title fontWeight="400">{add.title.normal}</Title>
                    </>
                  ) : (
                    <>
                      <Title fontWeight="400">{add.title.normal}</Title>
                      <Title>{add.title.bold}</Title>
                    </>
                  )}
                </HStack>
                <Caption1 fontWeight="700">{add.description}</Caption1>
                <HStack mt="6">
                  <Button w="135px" h="35px" color="#fff" bg={add.color}>
                    ${add.price}/month
                  </Button>
                  <Caption1 fontWeight="700" color="#000">
                    {add?.trial}
                  </Caption1>
                </HStack>
              </Box>
              <Image src={add.url} alt={add.description} />
            </HStack>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default PremiumAddons;
