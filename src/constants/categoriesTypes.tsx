import React from 'react';
import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  Entypo,
} from '@expo/vector-icons';
import { colors } from '../styles';

export const categoryInfos: Record<string, { color: string; icon: any }> = {
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
  otherIncome: {
    icon: (
      <Entypo name="dots-three-horizontal" size={20} color={colors.white} />
    ),
    color: 'darkgrey',
  },
  otherOutcome: {
    icon: (
      <Entypo name="dots-three-horizontal" size={20} color={colors.white} />
    ),
    color: 'darkgrey',
  },
  electronics: {
    color: 'black',
    icon: <MaterialIcons name="computer" size={24} color={colors.white} />,
  },
  salary: {
    color: 'yellow',
    icon: <MaterialIcons name="attach-money" size={24} color={colors.white} />,
  },
};
