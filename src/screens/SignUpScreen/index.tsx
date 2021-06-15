import React, { useContext, useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { KeyboardAvoidingView, Keyboard, View } from 'react-native';

import * as Yup from 'yup';
import SignUpVector from '../../../assets/signup.svg';
import Wave from '../../../assets/background.svg';
import { metrics } from '../../styles';
import { Container } from '../../components/Container';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { Title } from '../LoginScreen/styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { UserContext } from '../../contexts/user';

const SignUpScreen: React.FC = () => {
  const [margin, setMargin] = useState(metrics.base * 4);
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

  const keyboardDidShow = () => {
    setMargin(metrics.base * 50);
  };
  const keyboard = Keyboard.addListener('keyboardDidShow', keyboardDidShow);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <Wave
        width={metrics.wp(100)}
        style={{ position: 'absolute', top: -metrics.hp(7), zIndex: 0 }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <SignUpVector
          style={{
            alignSelf: 'flex-end',
            marginTop: metrics.base * 12,
            marginBottom: metrics.base,
          }}
          width={metrics.wp(60)}
          height={metrics.hp(30)}
        />
        <Container style={{ height: metrics.hp(57) }}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <Title>Cadastre-se</Title>
            <Form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                backgroundColor: '#FFF',
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
              }}
            >
              <Input name="name" placeholder="Nome" />
              <Input name="email" placeholder="Email" />
              <Input name="password" placeholder="Senha" />
              <Button
                style={{ marginTop: metrics.base * 4, marginBottom: margin }}
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
          </KeyboardAvoidingView>
        </Container>
      </View>
    </View>
  );
};

export default SignUpScreen;
