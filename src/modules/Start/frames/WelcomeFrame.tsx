"use client";
import { Sphere } from "@/shared/ui/Sphere";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { WelcomeWaves } from "../components/WelcomeFrame/WelcomeWavesTop";
import { TextStyles } from "@/theme";
import { useBreakpoints } from "@/shared/helpers/hooks/useBreakpoints";

export const WelcomeFrame: React.FC = () => {
  const { t } = useTranslation("main");
  const { lTab } = useBreakpoints();

  const router = useRouter();
  const { locale, locales, pathname, query, asPath } = router;

  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const getLanguageName = (lang: string) => {
    const names: { [key: string]: string } = {
      en: "En",
      ru: "Ru",
      kz: "Kz",
    };
    return names[lang] || lang;
  };

  return (
    <Box pos="relative" w="full" h="100vh" bg="primary.900">
      <WelcomeWaves />
      <VStack
        pos="absolute"
        w="full"
        h="full"
        px={{
          lPc: "50px",
          sPc: "20px",
          lTab: "24px",
          lMob: "20px",
          sMob: "16px",
        }}
        py={{
          lPc: "36px",
          sPc: 3,
          lTab: "18px",
          sTab: "22px",
          lMob: "26px",
          sMob: 2,
        }}
        justify="space-between"
      >
        <HStack gap={0} justify="space-between" w="full" align="start">
          <VStack gap={1.5} align="start">
            <Text
              cursor="default"
              color="text.main"
              textStyle="logo"
              whiteSpace="pre-line"
            >
              {t("start.companyName")}
            </Text>
            <Text
              color="text.main"
              cursor="default"
              textStyle="plRegular"
              maxW={{
                lPc: "360px",
                lMob: "260px",
                base: "140px",
              }}
              letterSpacing="4%"
            >
              {t("start.companyDescription")}
            </Text>
          </VStack>

          <HStack
            gap={{
              lPc: "60px",
              sPc: 5,
              base: "30px",
            }}
            as="nav"
          >
            {lTab ? (
              <>
                <Text
                  cursor="pointer"
                  color="text.main"
                  textStyle="plRegular"
                  // _active={{ color: "accent.500" }}
                >
                  {t("start.nav.howItWorks")}
                </Text>
                <Text
                  cursor="pointer"
                  color="text.main"
                  textStyle="plRegular"
                  // _active={{ color: "accent.500" }}
                >
                  {t("start.nav.about")}
                </Text>
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton>
                        {getLanguageName(locale || "en")}{" "}
                        <Text
                          as="span"
                          textStyle="menuNav"
                          display="inline-block"
                          transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                          transition="transform 0.2s"
                        >
                          ▲
                        </Text>
                      </MenuButton>
                      <MenuList>
                        {locales?.map((loc) => (
                          <MenuItem
                            key={loc}
                            onClick={() => changeLanguage(loc)}
                            pr={{
                              lPc: 2,
                              sPc: 1.75,
                              sTab: 1.5,
                              base: 1.25,
                            }}
                          >
                            {getLanguageName(loc)}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </>
                  )}
                </Menu>
              </>
            ) : null}
          </HStack>
        </HStack>
        {/* <HStack
          justify="space-between"
          w="full"
          position="absolute"
          top="calc(50% - 58px)"
          px="50px"
        >
          <Box w={4.5} h={4.5} bg="white" />
          <Box w={4.5} h={4.5} bg="white" />
        </HStack>
        <HStack justify="space-between" w="full" align="end">
          <HStack gap={4} align="end">
            <VStack gap={4}>
              <Box w={4.5} h={4.5} bg="white" />
              <Box w={4.5} h={4.5} bg="white" />
              <Box w={4.5} h={4.5} bg="white" />
            </VStack>
            <Box w={4.5} h={4.5} bg="white" />
          </HStack>
          <HStack gap={2}>
            <Sphere size={1.5} bg="#472265" />
            <Sphere size={1.5} bg="#005F15" />
            <Sphere size={1.5} bg="#472265" />
            <Sphere size={1.5} bg="#472265" />
            <Sphere size={1.5} bg="#472265" />
          </HStack>
        </HStack> */}
      </VStack>
    </Box>
  );
};
