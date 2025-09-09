import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { UniversalProps } from "../../App.tsx";
import React from "react";
import { Shift, useGetShiftsQuery } from '../../services/api';

export const MainScreen = ({ navigation }: UniversalProps) => {
  const { data: shifts, error, isLoading } = useGetShiftsQuery({ latitude: 45.039268, longitude: 38.987221 });

  if (isLoading) {
    return <Text>Loading users...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={shifts.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Shift }) => (
          <TouchableOpacity style={styles.block} onPress={() => { navigation.navigate('Shift') }}>
            <Text>Адрес: {item.address}</Text>
            <Text>Дата начала: {item.dateStartByCity}</Text>
            <Text>Время начала: {item.timeStartByCity}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  block: {
    borderWidth: 1,
  }
});
