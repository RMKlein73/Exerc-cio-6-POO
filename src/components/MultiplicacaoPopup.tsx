
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function MultiplicacaoPopup() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');

  function mostrar() {
    const resultado =
      Number(valor1) * Number(valor2) * Number(valor3);

    Alert.alert(
      'Resultado',
      `Valor 1: ${valor1}\nValor 2: ${valor2}\nValor 3: ${valor3}\nMultiplicação: ${resultado}`
    );
  }

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <Text>Valor 1:</Text>
      <TextInput
        value={valor1}
        onChangeText={setValor1}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8 }}
      />

      <Text>Valor 2:</Text>
      <TextInput
        value={valor2}
        onChangeText={setValor2}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8 }}
      />

      <Text>Valor 3:</Text>
      <TextInput
        value={valor3}
        onChangeText={setValor3}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 8 }}
      />

      <Button title="Calcular multiplicação" onPress={mostrar} />
    </View>
  );
}
