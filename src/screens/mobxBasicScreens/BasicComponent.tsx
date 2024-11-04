import React, {ReactElement} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

interface IBasicComponentProps {
  originalData: string[];
  formattedData: string[];
  filteredData: string[];
  filter: string;
  onFilterChange: (text: string) => void;
  onUpdateData: () => void;
  onNavigateToDetails: (item: string) => void;
}

export const BasicComponent: React.FC<IBasicComponentProps> = ({
  originalData,
  formattedData,
  filteredData,
  filter,
  onFilterChange,
  onUpdateData,
  onNavigateToDetails,
}): ReactElement => {
  const keyExtractor = (_: string, index: number) => index.toString();

  const renderItem = ({item}: {item: string}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onNavigateToDetails(item)}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Basic Data Display</Text>

      <View style={styles.card}>
        <Text style={styles.subHeader}>Original Data:</Text>
        <FlatList
          data={originalData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          scrollEnabled={false}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.subHeader}>Formatted Data (Uppercase):</Text>
        <FlatList
          data={formattedData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          scrollEnabled={false}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.subHeader}>Filtered Data:</Text>
        <TextInput
          style={styles.input}
          placeholder="Filter by letter"
          value={filter}
          onChangeText={onFilterChange}
        />
        <FlatList
          data={filteredData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          scrollEnabled={false}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={onUpdateData}>
        <Text style={styles.buttonText}>Update Data</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
  },
  listContainer: {
    paddingVertical: 8,
    flexGrow: 0,
  },
  itemContainer: {
    padding: 12,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 6,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3f51b5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
