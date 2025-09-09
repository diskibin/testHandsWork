import { StyleSheet, View, Text } from 'react-native';
import { UniversalProps } from "../../App.tsx";
import React from "react";

export const ShiftScreen = ({ navigation }: UniversalProps) => {
  return (
    <View style={styles.container}>
      <Text>Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
