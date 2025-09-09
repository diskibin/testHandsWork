import { StyleSheet, View, FlatList } from 'react-native';
import { RootStackParamList, UniversalScreenNavigationProp } from "../../App.tsx";
import React, { useEffect } from "react";
import { RouteProp } from '@react-navigation/native';
import { ShiftInfo } from "../../components";

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Shift'>;

interface DetailsScreenProps {
  route: DetailsScreenRouteProp;
  navigation: UniversalScreenNavigationProp;
}

export interface ShiftInfo {
  name: string;
  data: any;
}

export const ShiftScreen = ({ route, navigation }: DetailsScreenProps) => {
  const { shift } = route.params;
  const shiftInfo: ShiftInfo[] = [
    { name: 'Адрес', data: shift.address },
    { name: 'Компания', data: shift.companyName },
    { name: 'Дата начала', data: shift.dateStartByCity },
    { name: 'Время смены', data: shift.timeStartByCity + ' - ' + shift.timeEndByCity },
    { name: 'Работников', data: shift.currentWorkers + '/' + shift.planWorkers },
    { name: 'Сумма выплаты', data: shift.priceWorker + ' руб.' },
    { name: 'Бонус', data: shift.bonusPriceWorker + ' руб.' },
    { name: 'Количество отзывов ', data: shift.customerFeedbacksCount },
    { name: 'Рейтинг нанимателя', data: shift.customerRating },
  ]

  useEffect(() => {
    navigation.setOptions({ title: shift.workTypes[0].name });
  }, [navigation, shift.workTypes]);

  return (
    <View style={styles.container}>
      <FlatList
        data={shiftInfo}
        keyExtractor={(item) => item.name}
        renderItem={({ item }: { item: ShiftInfo }) => (
          <ShiftInfo item={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 16,
  }
});
