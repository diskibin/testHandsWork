import { FlatList, StyleSheet, Text, View } from 'react-native';
import { UniversalProps } from "../../App.tsx";
import React from "react";
import { Shift, useGetShiftsQuery } from '../../services/api';
import { ShiftItem } from "../../components";

export const MainScreen = ({ navigation }: UniversalProps) => {
  const { data: shifts, error, isLoading, refetch } = useGetShiftsQuery({ latitude: 45.039268, longitude: 38.987221 });

  if (isLoading) {
    return (
      <View style={styles.center}>
        <Text>Загрузка смен...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Ошибка</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={shifts?.data}
        keyExtractor={(item) => item.id}
        onRefresh={() => refetch}
        refreshing={isLoading}
        renderItem={({ item }: { item: Shift }) => (
          <ShiftItem item={item} onPress={() => { navigation.navigate('Shift', { shift: item }) }} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  }
});
