import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Shift } from "../../services/api.ts";

interface ShiftItemProps {
  item: Shift;
  onPress(): void;
}

export const ShiftItem: React.FC<ShiftItemProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.block} onPress={onPress}>
      <Text style={styles.title}>{item.workTypes[0].name}</Text>
      <Text>Адрес: {item.address}</Text>
      <Text>Время начала: {item.dateStartByCity} {item.timeStartByCity}</Text>
      <Text style={styles.price}>{item.priceWorker} руб.</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginTop: 4,
  }
});
