
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const lista = [
  { nome: 'Ana', idade: 10, turma: '22', nota1: 10, nota2: 8 },
  { nome: 'Carlos', idade: 11, turma: '22', nota1: 7, nota2: 6 },
  { nome: 'Cláudio', idade: 10, turma: '23', nota1: 7.5, nota2: 9 },
  { nome: 'Renato', idade: 11, turma: '23', nota1: 6, nota2: 5 }
];

export default function ListaAlunos() {
  return (
    <FlatList
      contentContainerStyle={{ padding: 15 }}
      data={lista}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => {
        const media = (item.nota1 + item.nota2) / 2;

        return (
          <View style={{
            padding: 15,
            marginBottom: 10,
            backgroundColor: '#ddd',
            borderRadius: 10
          }}>
            <Text>Nome: {item.nome}</Text>
            <Text>Idade: {item.idade}</Text>
            <Text>Turma: {item.turma}</Text>
            <Text>Nota 1: {item.nota1}</Text>
            <Text>Nota 2: {item.nota2}</Text>
            <Text>Média: {media.toFixed(1)}</Text>
            <Text>
              Status: {media >= 7 ? 'Aprovado' : 'Reprovado'}
            </Text>
          </View>
        );
      }}
    />
  );
}
