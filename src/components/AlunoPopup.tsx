
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function AlunoPopup() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [turma, setTurma] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');

  function mostrar() {
    const media = (Number(nota1) + Number(nota2)) / 2;

    Alert.alert(
      'Dados do Aluno',
      `Nome: ${nome}\nIdade: ${idade}\nTurma: ${turma}\nNota 1: ${nota1}\nNota 2: ${nota2}\nMédia: ${media.toFixed(1)}`
    );
  }

  return (
    <View style={{ padding: 20, gap: 8 }}>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} placeholder="Nome" style={{ borderWidth: 1, padding: 8 }} />

      <Text>Idade:</Text>
      <TextInput value={idade} onChangeText={setIdade} placeholder="Idade" keyboardType="numeric" style={{ borderWidth: 1, padding: 8 }} />

      <Text>Turma:</Text>
      <TextInput value={turma} onChangeText={setTurma} placeholder="Turma" style={{ borderWidth: 1, padding: 8 }} />

      <Text>Nota 1:</Text>
      <TextInput value={nota1} onChangeText={setNota1} placeholder="Nota 1" keyboardType="numeric" style={{ borderWidth: 1, padding: 8 }} />

      <Text>Nota 2:</Text>
      <TextInput value={nota2} onChangeText={setNota2} placeholder="Nota 2" keyboardType="numeric" style={{ borderWidth: 1, padding: 8 }} />

      <Button title="Mostrar dados e média" onPress={mostrar} />
    </View>
  );
}
