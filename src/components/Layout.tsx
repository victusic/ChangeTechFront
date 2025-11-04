import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Button,
  Stack,
  useColorModeValue,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale, locales, pathname, query, asPath } = router;

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const getLanguageName = (lang: string) => {
    const names: { [key: string]: string } = {
      en: 'English',
      ru: 'Русский',
      kz: 'Қазақша',
    };
    return names[lang] || lang;
  };

  return (
    <Box>
      <Box
        as="nav"
        bg={bgColor}
        borderBottom="1px"
        borderColor={borderColor}
        position="sticky"
        top={0}
        zIndex={10}
      >
        <Container maxW="container.xl">
          <Flex h={16} alignItems="center" justifyContent="space-between">
            <Stack direction="row" spacing={7}>
              <Button as={Link} href="/" variant="ghost">
                {t('navigation.home')}
              </Button>
              <Button as={Link} href="/about" variant="ghost">
                {t('navigation.about')}
              </Button>
              <Button as={Link} href="/contact" variant="ghost">
                {t('navigation.contact')}
              </Button>
            </Stack>

            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {getLanguageName(locale || 'en')}
              </MenuButton>
              <MenuList>
                {locales?.map((loc) => (
                  <MenuItem
                    key={loc}
                    onClick={() => changeLanguage(loc)}
                    fontWeight={locale === loc ? 'bold' : 'normal'}
                  >
                    {getLanguageName(loc)}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        </Container>
      </Box>

      <Container maxW="container.xl" py={8}>
        {children}
      </Container>
    </Box>
  );
}
