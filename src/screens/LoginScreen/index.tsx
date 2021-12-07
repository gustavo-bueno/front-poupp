import React, { useRef } from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginVector from '../../../assets/signin.svg';
import Input from '../../components/Input';
import { Container as ContentContainer } from '../../components/Container';
import {
  SignUpButton,
  ForgotPasswordButton,
  Title,
  SignInButton,
  Container,
  Form,
} from './styles';
import { Wave } from '../../components/Wave';
import { ROUTES } from '../../constants/routes';
import useAnimation from '../../hooks/useAnimation';
import { ScrollView } from 'react-native-gesture-handler';
import useUserData from '../../hooks/useUserData';
import { AxiosResponse } from 'axios';
import axiosApi from '../../services/apiRequest';

interface SigninData {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const { setUser } = useUserData();
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();

  const { svgViewStyle, yAnimationStyle } = useAnimation();

  const handleSubmit = async (data: SigninData) => {
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

      axiosApi
        .post('/signin', data)
        .then(async (response: AxiosResponse) => {
          if (response.status === 200) {
            await AsyncStorage.setItem('POUPP_USER_TOKEN', response.data.token);

            setUser(response.data);
          }
        })
        .catch((err) => {
          formRef.current?.setFieldError(
            'password',
            'O email ou a senha estão incorretos.'
          );
          console.log(err.response.data);
        });
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
      <View style={{ flex: 1 }}>
        <ContentContainer>
          <SignUpButton
            onPress={() => {
              navigate(ROUTES.SIGNUP);
            }}
          />
          <Animated.View style={[svgViewStyle, { alignSelf: 'flex-end' }]}>
            <LoginVector width="100%" height="100%" />
          </Animated.View>
        </ContentContainer>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView behavior="padding">
            <ContentContainer>
              <Animated.View style={yAnimationStyle}>
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
                <ForgotPasswordButton />
              </Animated.View>
            </ContentContainer>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};

export default LoginScreen;
