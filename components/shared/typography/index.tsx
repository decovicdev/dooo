import { chakra, Text } from "@chakra-ui/react";

const Heading = chakra(Text, {
  baseStyle: {
    fontWeight: "700",
  },
});

const Title = chakra(Heading, {
  baseStyle: {
    fontSize: "28px",
    lineHeight: "1.1",
  },
});

const SubTitle = chakra(Heading, {
  baseStyle: {
    fontSize: "20px",
    fontWeight: "600",
  },
});

const Body1 = chakra(Heading, {
  baseStyle: {
    fontSize: "18px",
  },
});
const Body2 = chakra(Heading, {
  baseStyle: {
    fontSize: "16px",
  },
});

const Caption1 = chakra(Text, {
  baseStyle: {
    fontSize: "15px",
    color: "gray",
  },
});
const Caption2 = chakra(Text, {
  baseStyle: {
    fontSize: "13px",
    color: "gray",
  },
});

export { Title, SubTitle, Caption1, Caption2, Body1, Body2 };
