import React from 'react';
import { Modal as RNModal, ModalProps } from 'react-native';
import Ripple from 'react-native-material-ripple';

import { Ionicons } from '@expo/vector-icons';

import { H1 } from '../Text';
import { ModalContainer, ModalContent, TitleContainer } from './styles';

interface CustomModalProps extends ModalProps {
  title: string;
}

const Modal: React.FC<CustomModalProps> = ({
  onRequestClose,
  visible,
  title,
  children,
  ...rest
}) => {
  return (
    <RNModal animationType="fade" transparent visible={visible} {...rest}>
      <ModalContainer>
        <ModalContent>
          <TitleContainer>
            <H1>{title}</H1>
            <Ripple onPress={onRequestClose}>
              <Ionicons name="close" size={24} color="black" />
            </Ripple>
          </TitleContainer>
          {children}
        </ModalContent>
      </ModalContainer>
    </RNModal>
  );
};

export default Modal;
