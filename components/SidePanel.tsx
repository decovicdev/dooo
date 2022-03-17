import { Box, VStack } from "@chakra-ui/react";
import React from "react";
import Image from "./shared/Image";
import Logo from "./shared/Logo";

interface SidePanelProps {}

const SidePanel: React.FC<SidePanelProps> = (props) => {
  return (
    <Box
      display={["none", "block"]}
      minH="100vh"
      p="4"
      borderRightWidth={2}
      borderColor="#000"
    >
      <Logo />
      <VStack mt="28" spacing="8">
        <Image src="/images/upload.png" alt="upload" />
        <Image src="/images/manage.png" alt="manage" />
        <Image src="/images/settings.png" alt="settings" />
      </VStack>
    </Box>
  );
};
export default SidePanel;
