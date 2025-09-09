import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainScreen, ShiftScreen } from "./screens";
import { RouteProp } from "@react-navigation/core";

export type RootStackParamList = {
  Main: undefined;
  Shift: undefined;
};

type UniversalScreenRouteProp = RouteProp<RootStackParamList>;
export type UniversalScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type UniversalProps = {
  route: UniversalScreenRouteProp;
  navigation: UniversalScreenNavigationProp;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false, animation: 'fade' }} />
        <Stack.Screen name="Shift" component={ShiftScreen} options={{ headerShown: false, animation: 'fade' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
