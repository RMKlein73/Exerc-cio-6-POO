
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function NomePopup() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  function mostrar() {
    Alert.alert('Nome completo', `${nome} ${sobrenome}`);
  }

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <Text>Nome:</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        style={{ borderWidth: 1, padding: 8 }}
      />

      <Text>Sobrenome:</Text>
      <TextInput
        value={sobrenome}
        onChangeText={setSobrenome}
        placeholder="Digite seu sobrenome"
        style={{ borderWidth: 1, padding: 8 }}
      />

      <Button title="Mostrar nome" onPress={mostrar} />
    </View>
  );
}
