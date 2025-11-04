import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useThemeContext } from '@/contexts/ThemeContext';
import { colorThemes, ThemeName } from '@/theme';

export default function ThemeSwitcher() {
  const { currentTheme, setTheme } = useThemeContext();
  const menuBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const themeColors: Record<ThemeName, string> = {
    blue: '#2196f3',
    green: '#4caf50',
    purple: '#9c27b0',
    orange: '#ff9800',
    teal: '#009688',
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="outline"
        size="sm"
      >
        <HStack spacing={2}>
          <Box
            w={4}
            h={4}
            borderRadius="full"
            bg={themeColors[currentTheme]}
          />
          <span>Тема</span>
        </HStack>
      </MenuButton>
      <MenuList bg={menuBg} borderColor={borderColor}>
        {(Object.keys(colorThemes) as ThemeName[]).map((themeName) => (
          <MenuItem
            key={themeName}
            onClick={() => setTheme(themeName)}
            fontWeight={currentTheme === themeName ? 'bold' : 'normal'}
            bg={currentTheme === themeName ? 'gray.100' : undefined}
            _dark={{
              bg: currentTheme === themeName ? 'gray.700' : undefined,
            }}
          >
            <HStack spacing={3}>
              <Box
                w={4}
                h={4}
                borderRadius="full"
                bg={themeColors[themeName]}
                border="1px solid"
                borderColor={borderColor}
              />
              <span>{colorThemes[themeName].name}</span>
            </HStack>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
