'use client';

import { AuthFormButtons, AuthFormFields } from '@/entities/auth';
import { Flex } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';

export const AuthForm = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Flex vertical component="form">
        <AuthFormFields />
        <AuthFormButtons />
      </Flex>
    </FormProvider>
  );
};
