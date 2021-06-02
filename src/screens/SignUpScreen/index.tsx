import React, { useRef } from 'react';
import { KeyboardAvoidingView, SafeAreaView, View } from 'react-native';

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

const SignUpScreen: React.FC = () => {
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
    <SafeAreaView style={{ flex: 1 }}>
      <Wave
        width={metrics.wp(100)}
        style={{ position: 'absolute', top: 0, zIndex: 0 }}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <SignUpVector
          style={{ alignSelf: 'flex-end', marginTop: metrics.base * 12 }}
          width={metrics.wp(60)}
          height={metrics.hp(30)}
        />
        <Container style={{ height: '58%' }}>
          <KeyboardAvoidingView behavior="padding">
            <Title>Cadastre-se</Title>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input name="name" placeholder="Nome" />
              <Input name="email" placeholder="Email" />
              <Input name="password" placeholder="Senha" />
              <Button
                style={{ marginVertical: metrics.base * 4 }}
                title="Cadastre"
                onPress={() => formRef.current?.submitForm()}
              />
            </Form>
          </KeyboardAvoidingView>
          <Button
            type="link"
            title="Já possui uma conta?"
            titleWeight="bold"
            style={{ alignSelf: 'center' }}
          />
        </Container>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
