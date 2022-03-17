import React from "react";
import Image from "./Image";

interface LogoProps {
  size?: string;
}

const Logo: React.FC<LogoProps> = ({ size }) => {
  return (
    <Image
      objectFit="contain"
      boxSize={size}
      src="/images/logo.png"
      alt="logo"
    />
  );
};
export default Logo;
