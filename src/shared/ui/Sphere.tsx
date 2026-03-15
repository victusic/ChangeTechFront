import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

export const Sphere: React.FC<
  { size: string | number; bg: string } & BoxProps
> = ({ size, bg, ...props }) => {
  return (
    <Box
      w={size}
      h={size}
      borderRadius="50%"
      bg={`radial-gradient(74.73% 80.92% at 30.75% 25.25%, #FFFFFF73 0%, #FFFFFF45 36.26%, #FFFFFF29 55.63%, #FFFFFF24 69.89%, #FFFFFF17 86.95%, #FFFFFF29 100%), ${bg}`}
      {...props}
    />
  );
};
