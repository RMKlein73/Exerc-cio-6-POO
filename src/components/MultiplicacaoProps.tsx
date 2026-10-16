
import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  valor1: number;
  valor2: number;
  valor3: number;
};

export default function MultiplicacaoProps(props: Props) {
  return (
    <View style={{ padding: 15 }}>
      <Text>Valor 1: {props.valor1}</Text>
      <Text>Valor 2: {props.valor2}</Text>
      <Text>Valor 3: {props.valor3}</Text>
      <Text>
        Resultado: {props.valor1 * props.valor2 * props.valor3}
      </Text>
    </View>
  );
}
