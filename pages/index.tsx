import type { NextPage } from "next";
import { Box, Heading, HStack, VStack, Wrap, WrapItem } from "@chakra-ui/react";

import SidePanel from "../components/SidePanel";
import Header from "../components/shared/Header";
import Stats from "../components/home/Stats";
import PremiumAddons from "../components/home/PremiumAddons";

const Home: NextPage = () => {
  return (
    <HStack align="stretch" spacing="0">
      <SidePanel />
      <Box flex={1}>
        <Header />
        <Stats />
        <PremiumAddons />
      </Box>
    </HStack>
  );
};

export default Home;
