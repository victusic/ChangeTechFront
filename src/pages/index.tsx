import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Button,
  SimpleGrid,
  HStack,
  Badge,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";
import { TextStyles } from "@/theme";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

export default function Home() {
  const { t } = useTranslation("main");

  const router = useRouter();
  const { locale, locales, pathname, query, asPath } = router;

  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const getLanguageName = (lang: string) => {
    const names: { [key: string]: string } = {
      en: "English",
      ru: "Русский",
      kz: "Қазақша",
    };
    return names[lang] || lang;
  };

  const headingColor = useColorModeValue("brand.600", "brand.300");
  const bgGradient = useColorModeValue(
    "linear(to-r, brand.50, accent.50)",
    "linear(to-r, gray.900, gray.800)"
  );

  return (
    <Layout>
      <VStack spacing={0}>
        <VStack
          spacing={0}
          pos="relative"
          w="full"
          h="100vh"
          bg="primary.bg"
          px="50px"
          py="36px"
          justify="space-between"
        >
          <HStack spacing={0} justify="space-between" w="full" align="start">
            <VStack spacing={1.5} align="start">
              <Text
                cursor="pointer"
                color="primary.mainText"
                fontFamily="'Rubik Mono One', sans-serif"
                fontSize="82px"
                lineHeight="auto"
                w="448px"
              >
                {t("start.companyName")}
              </Text>
              <Text
                cursor="pointer"
                color="primary.mainText"
                fontFamily="'Russo One', sans-serif"
                fontSize="22px"
                lineHeight="auto"
                w="374px"
                letterSpacing="4%"
              >
                {t("start.companyDescription")}
              </Text>
            </VStack>
            <HStack spacing="68px" as="nav">
              <Text
                cursor="pointer"
                color="primary.mainText"
                fontFamily="'Russo One', sans-serif"
                fontSize="20px"
                lineHeight="auto"
                _active={{ color: "primary.titleText2" }}
              >
                {t("start.nav.howItWorks")}
              </Text>
              <Text
                cursor="pointer"
                color="primary.mainText"
                fontFamily="'Russo One', sans-serif"
                fontSize="20px"
                lineHeight="auto"
                _active={{ color: "primary.titleText2" }}
              >
                {t("start.nav.about")}
              </Text>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  {getLanguageName(locale || "en")}
                </MenuButton>
                <MenuList>
                  {locales?.map((loc) => (
                    <MenuItem
                      key={loc}
                      onClick={() => changeLanguage(loc)}
                      fontWeight={locale === loc ? "bold" : "normal"}
                    >
                      {getLanguageName(loc)}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          <HStack spacing={0} justify="space-between"></HStack>
        </VStack>
        <VStack
          spacing={0}
          pos="relative"
          w="full"
          h="100vh"
          bg="mainPage.weSupportYouBg"
        ></VStack>
        <VStack
          spacing={0}
          pos="relative"
          w="full"
          h="100vh"
          bg="mainPage.typesBg"
        ></VStack>
        <VStack
          spacing={0}
          pos="relative"
          w="full"
          h="100vh"
          bg="mainPage.howSystemWorkBg"
        ></VStack>
        <VStack
          spacing={0}
          pos="relative"
          w="full"
          h="100vh"
          bg="mainPage.targetsBg"
        ></VStack>
        <VStack
          spacing={0}
          pos="relative"
          w="full"
          h="300px"
          bg="mainPage.aboutBg"
        ></VStack>
        <Box
          bgGradient={bgGradient}
          p={10}
          borderRadius="lg"
          textAlign="center"
        >
          <Text as="h1" textStyle="h1" color={headingColor} mb={4}>
            {t("home.title")}
          </Text>
          <Text fontSize="xl" color="gray.600">
            {t("home.description")}
          </Text>
        </Box>
        <Box
          p={8}
          borderRadius="lg"
          bg={useColorModeValue("white", "gray.700")}
          shadow="md"
        >
          <Heading as="h2" size="lg" mb={4} color="brand.500">
            Демонстрация цветовых тем
          </Heading>
          <Text fontSize="lg" lineHeight="tall" mb={6}>
            {t("home.content")}
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} mb={6}>
            <Button colorScheme="brand" size="lg">
              Основная кнопка
            </Button>
            <Button colorScheme="brand" variant="outline" size="lg">
              Вторичная кнопка
            </Button>
            <Button colorScheme="brand" variant="ghost" size="lg">
              Прозрачная кнопка
            </Button>
          </SimpleGrid>

          <HStack spacing={3} flexWrap="wrap">
            <Badge colorScheme="brand" fontSize="md" px={3} py={1}>
              Brand Badge
            </Badge>
            <Badge colorScheme="green" fontSize="md" px={3} py={1}>
              Success
            </Badge>
            <Badge colorScheme="red" fontSize="md" px={3} py={1}>
              Error
            </Badge>
            <Badge colorScheme="blue" fontSize="md" px={3} py={1}>
              Info
            </Badge>
          </HStack>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <Box
            p={6}
            borderRadius="lg"
            bg="brand.50"
            borderLeft="4px solid"
            borderColor="brand.500"
          >
            <Heading as="h3" size="md" mb={3} color="brand.700">
              Цветовая палитра
            </Heading>
            <Text color="brand.900">
              Каждая тема использует уникальную цветовую палитру с акцентными
              цветами
            </Text>
          </Box>

          <Box
            p={6}
            borderRadius="lg"
            bg="accent.50"
            borderLeft="4px solid"
            borderColor="accent.500"
          >
            <Heading as="h3" size="md" mb={3} color="accent.700">
              Акцентные цвета
            </Heading>
            <Text color="accent.900">
              Дополнительная палитра для создания визуального разнообразия
            </Text>
          </Box>
        </SimpleGrid>
        <Box
          p={8}
          borderRadius="lg"
          bg={useColorModeValue("gray.50", "gray.700")}
        >
          <Heading as="h2" size="lg" mb={4}>
            {t("common.welcome")}
          </Heading>
          <Text mb={4}>
            Next.js 14 + TypeScript + Chakra UI + i18n (Turbopack)
          </Text>
          <Text color="gray.600">
            Используйте переключатель тем в навигационной панели для смены
            цветовой схемы приложения.
          </Text>
        </Box>
      </VStack>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["main"])),
    },
  };
};
