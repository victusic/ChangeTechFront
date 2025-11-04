import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { InfoIcon, StarIcon, CheckCircleIcon } from '@chakra-ui/icons';
import Layout from '@/components/Layout';

interface FeatureProps {
  title: string;
  text: string;
  icon: any;
}

function Feature({ title, text, icon }: FeatureProps) {
  return (
    <Box
      p={6}
      borderRadius="lg"
      bg={useColorModeValue('white', 'gray.700')}
      shadow="md"
    >
      <Icon as={icon} w={10} h={10} color="brand.500" mb={4} />
      <Heading as="h3" size="md" mb={2}>
        {title}
      </Heading>
      <Text color="gray.600">{text}</Text>
    </Box>
  );
}

export default function About() {
  const { t } = useTranslation('common');
  
  const headingColor = useColorModeValue('brand.600', 'brand.300');

  return (
    <Layout>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" color={headingColor} mb={4}>
            {t('about.title')}
          </Heading>
          <Text fontSize="xl" color="gray.600">
            {t('about.description')}
          </Text>
        </Box>

        <Box p={8} borderRadius="lg" bg={useColorModeValue('white', 'gray.700')} shadow="md">
          <Text fontSize="lg" lineHeight="tall">
            {t('about.content')}
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Feature
            icon={StarIcon}
            title="Next.js 14"
            text="Fast and modern React framework with Turbopack"
          />
          <Feature
            icon={CheckCircleIcon}
            title="TypeScript"
            text="Type-safe development experience"
          />
          <Feature
            icon={InfoIcon}
            title="Chakra UI"
            text="Beautiful and accessible component library"
          />
        </SimpleGrid>
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
