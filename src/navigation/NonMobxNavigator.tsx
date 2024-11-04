import React, {ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NonMobxMainScreen} from '../screens/NonMobxMainScreen.tsx';
import {NonMobxStackParamList} from './MainNavigator.tsx';
import {basicScreenOptions} from '../utils/navigation.ts';

const NonMobxStack = createNativeStackNavigator<NonMobxStackParamList>();

export const NonMobxNavigator = (): ReactElement => (
  <NonMobxStack.Navigator
    screenOptions={basicScreenOptions}
    initialRouteName="NonMobxMain">
    <NonMobxStack.Screen name="NonMobxMain" component={NonMobxMainScreen} />
  </NonMobxStack.Navigator>
);
