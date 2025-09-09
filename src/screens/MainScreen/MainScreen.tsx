import { FlatList, StyleSheet, Text, View } from 'react-native';
import { UniversalProps } from "../../App.tsx";
import React, { useEffect } from "react";
import { Shift, useLazyGetShiftsQuery } from '../../services/api';
import { ShiftItem } from "../../components";
import Geolocation from '@react-native-community/geolocation';

export const MainScreen = ({ navigation }: UniversalProps) => {
  const [triggerGetShifts, { data: shifts, error, isLoading }, refetch] = useLazyGetShiftsQuery();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        triggerGetShifts({ latitude, longitude })
      },
    );
  }, [triggerGetShifts]);

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
        ListEmptyComponent={EmptyListMessage}
      />
    </View>
  );
}

const EmptyListMessage = () => (
  <View style={styles.center}>
    <Text>Ничего не найдено</Text>
  </View>
);

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
    padding: 16,
  }
});
