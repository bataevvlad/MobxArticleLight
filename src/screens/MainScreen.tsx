import React, {ReactElement} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/MainNavigator';

type MainScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainNavigator'
>;

export const MainScreen = (): ReactElement => {
  const navigation = useNavigation<MainScreenNavigationProp>();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('MobxNavigator')}>
            <Text style={styles.buttonText}>Go to MobX Screens</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('NonMobxNavigator')}>
            <Text style={styles.buttonText}>Go to Non-MobX Screens</Text>
          </TouchableOpacity>
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
    width: '100%',
    maxWidth: 320,
  },
  button: {
    backgroundColor: '#3f51b5',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
