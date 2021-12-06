import React from 'react';
import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  Entypo,
} from '@expo/vector-icons';
import { ICategory } from '../models/category';
import { colors } from '../styles';

export const categoryInfos = {
  food: {
    color: 'red',
    icon: <Ionicons name="fast-food-outline" size={20} color={colors.white} />,
  },
  home: {
    color: 'green',
    icon: <Ionicons name="home" size={20} color={colors.white} />,
  },
  health: {
    icon: <FontAwesome5 name="hospital" size={20} color={colors.white} />,
    color: 'cornflowerblue',
  },
  leisure: {
    icon: <FontAwesome5 name="umbrella-beach" size={20} color={colors.white} />,
    color: 'orange',
  },
  transport: {
    icon: (
      <MaterialIcons name="directions-transit" size={20} color={colors.white} />
    ),
    color: 'aquamarine',
  },
  otherincome: {
    icon: (
      <Entypo name="dots-three-horizontal" size={20} color={colors.white} />
    ),
    color: 'darkgrey',
  },
  otheroutcome: {
    icon: (
      <Entypo name="dots-three-horizontal" size={20} color={colors.white} />
    ),
    color: 'darkgrey',
  },
  eletronics: {
    color: 'black',
    icon: <MaterialIcons name="computer" size={24} color={colors.white} />,
  },
  salary: {
    color: 'yellow',
    icon: <MaterialIcons name="attach-money" size={24} color={colors.white} />,
  },
};

export const categoryTypes: ICategory[] = [
  {
    id: '1',
    name: 'Alimentação',
    icon: <Ionicons name="fast-food-outline" size={20} color={colors.white} />,
    color: 'red',
  },
  {
    id: '2',
    name: 'Moradia',
    icon: <Ionicons name="home" size={20} color={colors.white} />,
    color: 'green',
  },
  {
    id: '3',
    name: 'Saúde',
    icon: <FontAwesome5 name="hospital" size={20} color={colors.white} />,
    color: 'cornflowerblue',
  },
  {
    id: '4',
    name: 'Lazer',
    icon: <FontAwesome5 name="umbrella-beach" size={20} color={colors.white} />,
    color: 'orange',
  },
  {
    id: '5',
    name: 'Transporte',
    icon: (
      <MaterialIcons name="directions-transit" size={20} color={colors.white} />
    ),
    color: 'aquamarine',
  },
  {
    id: '6',
    name: 'Outros',
    icon: (
      <Entypo name="dots-three-horizontal" size={20} color={colors.white} />
    ),
    color: 'darkgrey',
  },
];
