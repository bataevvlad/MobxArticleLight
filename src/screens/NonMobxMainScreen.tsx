import React, {ReactElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const NonMobxMainScreen = (): ReactElement => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.title}>Non-MobX Main Screen</Text>
      <Text style={styles.subtitle}>Explore without MobX</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
  },
});
