import React, { useContext, useRef } from 'react';
import { Platform, ScrollView } from 'react-native';
import { KeyboardAvoidingView, View } from 'react-native';

import * as Yup from 'yup';
import { metrics } from '../../styles';
import { Container as FormContainer } from '../../components/Container';
import { FormHandles } from '@unform/core';
import { Title } from '../LoginScreen/styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { UserContext } from '../../contexts/user';
import { Container, SignUpVector, Form, Content } from './styles';
import { Wave } from '../../components/Wave';

const SignUpScreen: React.FC = () => {
  const { setUser } = useContext(UserContext);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: any) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O campo e-mail é obrigatório.'),
        email: Yup.string().email().required('O campo e-mail é obrigatório.'),
        password: Yup.string()
          .min(8, 'A senha deve ter 8 caracteres')
          .required('O campo senha é obrigatório.'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      setUser(true);
    } catch (error) {
      const validationErrors: Record<string, any> = {};
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((error) => {
          validationErrors[error.path!] = error.message;
        });
        formRef.current?.setErrors(validationErrors);
      }
    }
  };

  return (
    <Container>
      <Wave />
      <Content>
        <SignUpVector />
        <FormContainer style={{ height: metrics.hp(57) }}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <Title>Cadastre-se</Title>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome" />
                <Input name="email" placeholder="Email" />
                <Input name="password" placeholder="Senha" />
                <Button
                  style={{ marginTop: metrics.base * 4 }}
                  title="Cadastre"
                  onPress={() => formRef.current?.submitForm()}
                />
              </Form>
              <Button
                type="link"
                title="Já possui uma conta?"
                titleWeight="bold"
                style={{ alignSelf: 'center' }}
              />
            </ScrollView>
          </KeyboardAvoidingView>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default SignUpScreen;
