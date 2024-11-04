import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {MobxStackParamList} from '../../navigation/MainNavigator.tsx';
import {RouteProp} from '@react-navigation/native';

type DetailsScreenRouteProp = RouteProp<MobxStackParamList, 'Details'>;

interface IDetailsScreenProps {
  route: DetailsScreenRouteProp;
}

export const DetailsScreen = ({route}: IDetailsScreenProps): ReactElement => {
  const {item} = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.header}>Details Screen</Text>
          <Text style={styles.detailText}>
            Details for: <Text style={styles.itemText}>{item}</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    alignItems: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  detailText: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3f51b5',
  },
});
