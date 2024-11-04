import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MobxNavigator} from './MobxNavigator.tsx';
import {NonMobxNavigator} from './NonMobxNavigator.tsx';
import {MainScreen} from '../screens/MainScreen.tsx';

export type RootStackParamList = {
  MainNavigator: undefined;
  MobxNavigator: undefined;
  NonMobxNavigator: undefined;
};

export type MobxStackParamList = {
  BasicMain: undefined;
  Details: {item: string};
};

export type NonMobxStackParamList = {
  NonMobxMain: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigator(): ReactElement {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="MainNavigator">
        <RootStack.Screen name="MainNavigator" component={MainScreen} />
        <RootStack.Screen name="MobxNavigator" component={MobxNavigator} />
        <RootStack.Screen
          name="NonMobxNavigator"
          component={NonMobxNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
