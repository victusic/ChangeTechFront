import { Box, Icon } from "@chakra-ui/react";
import { WelcomeWavesTop } from "../../ui/WelcomeFrame/WelcomeWavesTop";
import { WelcomeWavesBottomRight } from "../../ui/WelcomeFrame/WelcomeWavesBottomRight";
import { WelcomeWavesBottomLeft } from "../../ui/WelcomeFrame/WelcomeWavesBottomLeft";
import { WelcomeWavesCenter } from "../../ui/WelcomeFrame/WelcomeWavesCenter";

export const WelcomeWaves: React.FC = () => {
  return (
    <Box pos="absolute" w="full" h="100vh" overflow="hidden">
      <WelcomeWavesCenter />
      <WelcomeWavesTop />
      <WelcomeWavesBottomLeft />
      <WelcomeWavesBottomRight />
    </Box>
  );
};
