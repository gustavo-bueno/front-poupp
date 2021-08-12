import React, { useContext, useRef } from 'react';
import { Platform, ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import Animated from 'react-native-reanimated';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import { metrics } from '../../styles';
import { Container as FormContainer } from '../../components/Container';
import { Title } from '../LoginScreen/styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { UserContext } from '../../contexts/user';
import { Container, SignUpVector, Form, Content } from './styles';
import { Wave } from '../../components/Wave';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants/routes';
import useAnimation from '../../hooks/useAnimation';

const SignUpScreen: React.FC = () => {
  const { setUser } = useContext(UserContext);
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();

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

  const { svgViewStyle, yAnimationStyle } = useAnimation();

  return (
    <Container>
      <Wave />
      <Content>
        <Animated.View
          style={[
            svgViewStyle,
            {
              alignSelf: 'flex-end',
              marginBottom: metrics.base * 8,
            },
          ]}
        >
          <SignUpVector />
        </Animated.View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <KeyboardAvoidingView behavior="padding">
            <FormContainer>
              <Animated.View style={yAnimationStyle}>
                <Title>Criar conta</Title>
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <Input name="name" placeholder="Nome" />
                  <Input name="email" placeholder="Email" />
                  <Input name="password" placeholder="Senha" />
                  <Button
                    style={{ marginTop: metrics.base * 4 }}
                    title="Criar conta"
                    onPress={() => formRef.current?.submitForm()}
                  />
                </Form>
                <Button
                  onPress={() => navigate(ROUTES.LOGIN)}
                  type="link"
                  title="Já possui uma conta?"
                  titleWeight="bold"
                  style={{
                    alignSelf: 'center',
                    marginVertical: metrics.base * 4,
                  }}
                />
              </Animated.View>
            </FormContainer>
          </KeyboardAvoidingView>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default SignUpScreen;
