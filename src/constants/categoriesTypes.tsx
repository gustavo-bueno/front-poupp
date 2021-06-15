import React from 'react';
import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  Entypo,
} from '@expo/vector-icons';
import { ICategory } from '../models/category.model';
import { colors } from '../styles';

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
