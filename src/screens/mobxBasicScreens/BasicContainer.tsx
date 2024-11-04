import React from 'react';
import {observer} from 'mobx-react-lite';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useBasicVm} from '../../context/BasicContext.ts';
import {MobxStackParamList} from '../../navigation/MainNavigator.tsx';
import {BasicComponent} from './BasicComponent.tsx';
import {randomLetterGenerator} from '../../utils/randomLetterGenerator.ts';

export const BasicContainer = observer(() => {
  const basicVm = useBasicVm();
  const {data, formattedData, filteredData, setFilter, updateData, getFilter} =
    basicVm;
  const navigation =
    useNavigation<NativeStackNavigationProp<MobxStackParamList, 'Details'>>();

  const handleNavigateToDetails = (item: string) => {
    navigation.navigate('Details', {item});
  };

  const onUpdateData = () => {
    const randomData = randomLetterGenerator(5);
    updateData(randomData);
  };

  return (
    <BasicComponent
      originalData={data}
      formattedData={formattedData}
      filteredData={filteredData}
      filter={getFilter}
      onFilterChange={setFilter}
      onUpdateData={onUpdateData}
      onNavigateToDetails={handleNavigateToDetails}
    />
  );
});
