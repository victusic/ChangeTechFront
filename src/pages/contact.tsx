import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import Layout from '@/components/Layout';
import { useState } from 'react';

export default function Contact() {
  const { t } = useTranslation('common');
  const toast = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const headingColor = useColorModeValue('brand.600', 'brand.300');
  const formBg = useColorModeValue('white', 'gray.700');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('common.welcome'),
      description: 'Form submitted successfully!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <VStack spacing={8} align="stretch" maxW="container.md" mx="auto">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" color={headingColor} mb={4}>
            {t('contact.title')}
          </Heading>
          <Text fontSize="xl" color="gray.600">
            {t('contact.description')}
          </Text>
        </Box>

        <Box p={8} borderRadius="lg" bg={formBg} shadow="md">
          <Text fontSize="lg" mb={6} lineHeight="tall">
            {t('contact.content')}
          </Text>

          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>{t('contact.form.name')}</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name')}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>{t('contact.form.email')}</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email')}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>{t('contact.form.message')}</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message')}
                  rows={5}
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="brand"
                size="lg"
                width="full"
              >
                {t('contact.form.submit')}
              </Button>
            </VStack>
          </form>
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
