import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { ShiftInfo as ShiftInfoType } from "../../screens";

interface ShiftInfoProps {
  item: ShiftInfoType;
}

export const ShiftInfo: React.FC<ShiftInfoProps> = ({ item }) => {
  return (
    <View style={styles.param} key={item.name}>
      <Text style={styles.leftText}>{item.name}:</Text>
      <Text style={styles.rightText}>{item.data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  param: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  leftText: {
    textAlign: 'left',
  },
  rightText: {
    textAlign: 'right',
    flexWrap: 'wrap',
    flexShrink: 1
  }
});
