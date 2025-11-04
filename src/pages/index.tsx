import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import Layout from '@/components/Layout';

export default function Home() {
  const { t } = useTranslation('common');
  
  const headingColor = useColorModeValue('brand.600', 'brand.300');
  const bgGradient = useColorModeValue(
    'linear(to-r, brand.50, blue.50)',
    'linear(to-r, gray.900, gray.800)'
  );

  return (
    <Layout>
      <VStack spacing={8} align="stretch">
        <Box
          bgGradient={bgGradient}
          p={10}
          borderRadius="lg"
          textAlign="center"
        >
          <Heading as="h1" size="2xl" color={headingColor} mb={4}>
            {t('home.title')}
          </Heading>
          <Text fontSize="xl" color="gray.600">
            {t('home.description')}
          </Text>
        </Box>

        <Box p={8} borderRadius="lg" bg={useColorModeValue('white', 'gray.700')} shadow="md">
          <Text fontSize="lg" lineHeight="tall">
            {t('home.content')}
          </Text>
        </Box>

        <Box p={8} borderRadius="lg" bg={useColorModeValue('blue.50', 'gray.700')}>
          <Heading as="h2" size="lg" mb={4}>
            {t('common.welcome')}
          </Heading>
          <Text>
            Next.js 14 + TypeScript + Chakra UI + i18n (Turbopack)
          </Text>
        </Box>
      </VStack>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
