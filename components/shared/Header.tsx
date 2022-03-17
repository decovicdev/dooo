import { Avatar, Button, Divider, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Container from "./Container";
import Image from "./Image";
import Logo from "./Logo";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Container>
      <Stack
        justify="flex-end"
        direction={["column-reverse", "row"]}
        w="full"
        spacing="5"
        p="4"
      >
        <Button
          fontWeight="normal"
          minW="151px"
          h="45px"
          bg="#181D30"
          color="#fff"
        >
          + Upload Video
        </Button>
        <HStack justify="space-between">
          <HStack
            display={{
              base: "flex",
              md: "none",
            }}
          >
            <Image src="/images/bars.png" alt="menu icon" />
            <Logo size="26px" />
          </HStack>
          <HStack>
            <Image src="/images/globe.png" alt="globe" />
            <Image src="/images/subtract.png" alt="subtract" />
            <Image src="/images/stats.png" alt="stats" />
            <Image src="/images/xxx.png" alt="xxx" />
            <Image src="/images/bell.png" alt="bell" />
            <Divider h="27px" orientation="vertical" borderColor="gray" />
            <Text>Shekh AI Raihan</Text>
            <Avatar
              ring={2}
              padding="0.5"
              ringColor="gray.200"
              bg="white"
              src="/images/avatar.png"
            />
          </HStack>
        </HStack>
      </Stack>
    </Container>
  );
};
export default Header;
