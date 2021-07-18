import React, { useContext, useRef } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Animated from 'react-native-reanimated';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

import LoginVector from '../../../assets/signin.svg';
import Input from '../../components/Input';
import { Container as ContentContainer } from '../../components/Container';
import {
  FormContainer,
  Header,
  SignUpButton,
  ForgotPasswordButton,
  Title,
  SignInButton,
  Container,
  Form,
} from './styles';
import { UserContext } from '../../contexts/user';
import { Wave } from '../../components/Wave';
import Animation from '../../utils/animation';
import { ROUTES } from '../../constants/routes';

const LoginScreen: React.FC = () => {
  const { setUser } = useContext(UserContext);
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();

  const { svgViewStyle, yAnimationStyle } = Animation();

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
    <Container>
      <Wave />
      <ContentContainer style={{ justifyContent: 'space-between' }}>
        <Header>
          <SignUpButton
            onPress={() => {
              navigate(ROUTES.SIGNUP);
            }}
          />
          <Animated.View style={[svgViewStyle, { alignSelf: 'flex-end' }]}>
            <LoginVector width="100%" height="100%" />
          </Animated.View>
        </Header>
        <FormContainer>
          <Animated.View style={yAnimationStyle}>
            <KeyboardAvoidingView behavior="padding">
              <Title>Entrar</Title>
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Input name="email" placeholder="Email" />
                <Input
                  secureTextEntry={true}
                  name="password"
                  placeholder="Senha"
                />
                <SignInButton onPress={() => formRef.current?.submitForm()} />
              </Form>
            </KeyboardAvoidingView>
            <ForgotPasswordButton />
          </Animated.View>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};

export default LoginScreen;
