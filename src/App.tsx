import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainScreen, ShiftScreen } from "./screens";
import { RouteProp } from "@react-navigation/core";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { Shift } from "./services/api.ts";

export type RootStackParamList = {
  Main: undefined;
  Shift: { shift: Shift };
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
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={ MainScreen } options={{ title: 'Список смен', headerTitleAlign: 'center', animation: 'fade' }} />
          <Stack.Screen name="Shift" component={ ShiftScreen } options={{ title: 'Смена', headerTitleAlign: 'center', animation: 'fade' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
