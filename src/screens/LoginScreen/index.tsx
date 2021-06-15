import React, { useContext, useRef } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Wave from '../../../assets/background.svg';
import LoginVector from '../../../assets/signin.svg';
import Input from '../../components/Input';
import { metrics } from '../../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container } from '../../components/Container';
import {
  FormContainer,
  Header,
  SignUpButton,
  ForgotPasswordButton,
  Title,
  SignInButton,
} from './styles';
import { UserContext } from '../../contexts/user';

const LoginScreen: React.FC = () => {
  const { setUser } = useContext(UserContext);
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: Object) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um email válido')
          .required('O campo e-mail é obrigatório.'),
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <Wave
        width={metrics.wp(100)}
        style={{ position: 'absolute', top: -metrics.hp(7), zIndex: 0 }}
      />
      <Container style={{ justifyContent: 'space-between' }}>
        <Header>
          <SignUpButton />
          <LoginVector
            style={{ alignSelf: 'flex-end' }}
            width={metrics.wp(65)}
            height={metrics.hp(35)}
          />
        </Header>
        <FormContainer>
          <KeyboardAvoidingView behavior="padding">
            <Title>Entrar</Title>
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                backgroundColor: '#FFF',
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              }}
            >
              <Input name="email" placeholder="Email" />
              <Input name="password" placeholder="Senha" />
              <SignInButton onPress={() => formRef.current?.submitForm()} />
            </Form>
          </KeyboardAvoidingView>
          <ForgotPasswordButton />
        </FormContainer>
      </Container>
    </SafeAreaView>
  );
};

export default LoginScreen;
