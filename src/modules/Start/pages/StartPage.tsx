import { VStack } from "@chakra-ui/react";
import { WelcomeFrame } from "../frames/WelcomeFrame";

export const StartPage: React.FC = () => {
  return (
    <VStack gap={0} w="full">
      <WelcomeFrame />
    </VStack>
  );
};
