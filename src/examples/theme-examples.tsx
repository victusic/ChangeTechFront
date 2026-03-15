// Примеры использования цветовых тем в компонентах

import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useThemeContext } from "@/shared/context/ThemeContext";

// ============================================
// Пример 1: Использование основной палитры brand
// ============================================
export function BrandColorsExample() {
  return (
    <Box>
      <Box bg="brand.50" p={4}>
        Светлый фон (50)
      </Box>
      <Box bg="brand.100" p={4}>
        Очень светлый (100)
      </Box>
      <Box bg="brand.200" p={4}>
        Светлый (200)
      </Box>
      <Box bg="brand.300" p={4}>
        Средне-светлый (300)
      </Box>
      <Box bg="brand.400" p={4}>
        Средний (400)
      </Box>
      <Box bg="brand.500" p={4} color="white">
        Основной (500)
      </Box>
      <Box bg="brand.600" p={4} color="white">
        Средне-тёмный (600)
      </Box>
      <Box bg="brand.700" p={4} color="white">
        Тёмный (700)
      </Box>
      <Box bg="brand.800" p={4} color="white">
        Очень тёмный (800)
      </Box>
      <Box bg="brand.900" p={4} color="white">
        Самый тёмный (900)
      </Box>
    </Box>
  );
}

// ============================================
// Пример 2: Использование акцентной палитры accent
// ============================================
export function AccentColorsExample() {
  return (
    <Box>
      <Button colorScheme="accent">Акцентная кнопка</Button>
      <Box bg="accent.100" p={4} borderLeft="4px" borderColor="accent.500">
        <Heading size="md" color="accent.700">
          Акцентный заголовок
        </Heading>
        <Text color="accent.900">Акцентный текст</Text>
      </Box>
    </Box>
  );
}

// ============================================
// Пример 3: Адаптивные цвета (светлая/тёмная тема)
// ============================================
export function AdaptiveColorsExample() {
  const bgColor = useColorModeValue("brand.50", "gray.800");
  const textColor = useColorModeValue("brand.900", "brand.100");
  const borderColor = useColorModeValue("brand.200", "gray.600");

  return (
    <Box
      bg={bgColor}
      color={textColor}
      borderColor={borderColor}
      border="1px solid"
      p={6}
    >
      Этот блок адаптируется к цветовому режиму
    </Box>
  );
}

// ============================================
// Пример 4: Программное переключение темы
// ============================================
export function ThemeSwitchExample() {
  const { currentTheme, setTheme } = useThemeContext();

  return (
    <Box>
      <Text>Текущая тема: {currentTheme}</Text>
      <Button onClick={() => setTheme("blue")}>Синяя</Button>
      <Button onClick={() => setTheme("green")}>Зелёная</Button>
      <Button onClick={() => setTheme("purple")}>Фиолетовая</Button>
      <Button onClick={() => setTheme("orange")}>Оранжевая</Button>
      <Button onClick={() => setTheme("teal")}>Бирюзовая</Button>
    </Box>
  );
}

// ============================================
// Пример 5: Градиенты с цветами темы
// ============================================
export function GradientExample() {
  const gradient = useColorModeValue(
    "linear(to-r, brand.400, accent.400)",
    "linear(to-r, brand.600, accent.600)",
  );

  return (
    <Box bgGradient={gradient} p={10} borderRadius="xl" color="white">
      <Heading>Градиент с цветами темы</Heading>
      <Text>Автоматически меняется при смене темы</Text>
    </Box>
  );
}

// ============================================
// Пример 6: Кнопки с разными вариантами
// ============================================
export function ButtonVariantsExample() {
  return (
    <Box>
      <Button colorScheme="brand" variant="solid">
        Solid Button
      </Button>
      <Button colorScheme="brand" variant="outline">
        Outline Button
      </Button>
      <Button colorScheme="brand" variant="ghost">
        Ghost Button
      </Button>
      <Button colorScheme="brand" variant="link">
        Link Button
      </Button>
    </Box>
  );
}

// ============================================
// Пример 7: Карточка с цветами темы
// ============================================
export function ThemedCardExample() {
  const cardBg = useColorModeValue("white", "gray.700");
  const headerBg = useColorModeValue("brand.50", "brand.900");
  const shadow = useColorModeValue("md", "dark-lg");

  return (
    <Box bg={cardBg} borderRadius="lg" overflow="hidden" shadow={shadow}>
      <Box bg={headerBg} p={4}>
        <Heading size="md" color="brand.700">
          Заголовок карточки
        </Heading>
      </Box>
      <Box p={4}>
        <Text>Содержимое карточки с адаптивными цветами</Text>
        <Button colorScheme="brand" mt={4}>
          Действие
        </Button>
      </Box>
    </Box>
  );
}
