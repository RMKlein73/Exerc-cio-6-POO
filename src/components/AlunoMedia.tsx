
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function AlunoMedia() {
  const [nome, setNome] = useState('Ana');
  const [idade, setIdade] = useState('10');
  const [turma, setTurma] = useState('22');
  const [nota1, setNota1] = useState('10');
  const [nota2, setNota2] = useState('8');

  function calcular() {
    const media = (Number(nota1) + Number(nota2)) / 2;

    Alert.alert(
      'Dados do Aluno',
      `Nome: ${nome}\nIdade: ${idade}\nTurma: ${turma}\nNota 1: ${nota1}\nNota 2: ${nota2}\nMédia: ${media.toFixed(1)}\nStatus: ${media >= 7 ? 'Aprovado' : 'Reprovado'}`
    );
  }

  return (
    <View style={{ padding: 20, gap: 8 }}>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} />

      <Text>Idade:</Text>
      <TextInput value={idade} onChangeText={setIdade} />

      <Text>Turma:</Text>
      <TextInput value={turma} onChangeText={setTurma} />

      <Text>Nota 1:</Text>
      <TextInput value={nota1} onChangeText={setNota1} keyboardType="numeric" />

      <Text>Nota 2:</Text>
      <TextInput value={nota2} onChangeText={setNota2} keyboardType="numeric" />

      <Button title="Mostrar dados e média" onPress={calcular} />
    </View>
  );
}
