import React from 'react';
import Ripple from 'react-native-material-ripple';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

import { H2 } from '../../../components/Text';
import { metrics } from '../../../styles';

import { OptionsContainer, OptionContainer } from './styles';

const TopTabs: React.FC<MaterialTopTabBarProps> = ({
  state,
  descriptors,
  navigation,
  position,
}) => {
  return (
    <OptionsContainer>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_: any, i: any) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i: any) => (i === index ? 1 : 0)),
        });

        return (
          <Ripple
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ marginLeft: metrics.base * 5 }}
          >
            <OptionContainer active={isFocused}>
              <H2>{label}</H2>
            </OptionContainer>
          </Ripple>
        );
      })}
    </OptionsContainer>
  );
};

export default TopTabs;
