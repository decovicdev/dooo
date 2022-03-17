import { Image as ChakraImage, ImageProps } from "@chakra-ui/react";
import React from "react";

const Image: React.FC<ImageProps> = (props) => {
  const { loading = "lazy", ...rest } = props;
  return <ChakraImage loading={loading} {...rest} />;
};
export default Image;
