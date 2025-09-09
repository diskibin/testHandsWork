import { StyleSheet, View } from 'react-native';
import { UniversalProps } from "../../App.tsx";
import React from "react";

export const MainScreen = ({ navigation }: UniversalProps) => {
  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#7446EE',
  },
});
