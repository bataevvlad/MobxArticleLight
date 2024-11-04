import React, {ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BasicVm} from '../BasicVm';
import {BasicStore} from '../BasicStore';
import {BasicContext} from '../context/BasicContext.ts';
import {BasicContainer} from '../screens/mobxBasicScreens/BasicContainer.tsx';
import {MobxStackParamList} from './MainNavigator.tsx';
import {DetailsScreen} from '../screens/mobxBasicScreens/DetailsScreen.tsx';
import {basicScreenOptions} from '../utils/navigation.ts';

const MobxStack = createNativeStackNavigator<MobxStackParamList>();

export const MobxNavigator = (): ReactElement => {
  const [store] = React.useState(new BasicStore());
  const [basicVm] = React.useState(new BasicVm(store));

  return (
    <BasicContext.Provider value={basicVm}>
      <MobxStack.Navigator
        screenOptions={basicScreenOptions}
        initialRouteName="BasicMain">
        <MobxStack.Screen name="BasicMain" component={BasicContainer} />
        <MobxStack.Screen name="Details" component={DetailsScreen} />
      </MobxStack.Navigator>
    </BasicContext.Provider>
  );
};
