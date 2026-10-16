
import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

import ListaAlunos from '../components/ListaAlunos';
import AlunoMedia from '../components/AlunoMedia';

import TelaInicial from '../components/TelaInicial';
import TelaOpcoes from '../components/TelaOpcoes';
import TelaBoasVindas from '../components/TelaBoasVindas';

import Funcionario from '../components/Funcionario';
import AlunoProps from '../components/AlunoProps';
import MultiplicacaoProps from '../components/MultiplicacaoProps';

import NomePopup from '../components/NomePopup';
import AlunoPopup from '../components/AlunoPopup';
import MultiplicacaoPopup from '../components/MultiplicacaoPopup';

export default function Index() {
  const [tela, setTela] = useState(0);

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      {tela === 0 ? (
        <ScrollView contentContainerStyle={{ padding: 20, gap: 12 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            Menu de Atividades
          </Text>

          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Atividade 1
          </Text>
          <Button title="Lista de Alunos" onPress={() => setTela(1)} />
          <Button title="Aluno e Média" onPress={() => setTela(2)} />
          <Button title="Tela Inicial" onPress={() => setTela(3)} />
          <Button title="Tela Opções" onPress={() => setTela(4)} />
          <Button title="Tela Boas-vindas" onPress={() => setTela(5)} />

          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Atividade 1 - Props
          </Text>
          <Button title="Funcionário" onPress={() => setTela(6)} />
          <Button title="Aluno com Média" onPress={() => setTela(7)} />
          <Button title="Multiplicação" onPress={() => setTela(8)} />

          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Atividade 2 - Popup
          </Text>
          <Button title="Nome e Sobrenome" onPress={() => setTela(9)} />
          <Button title="Dados do Aluno" onPress={() => setTela(10)} />
          <Button title="Multiplicação com Popup" onPress={() => setTela(11)} />
        </ScrollView>
      ) : (
        <View style={{ flex: 1 }}>
          <View style={{ paddingHorizontal: 20, paddingBottom: 10 }}>
            <Button
              title="Voltar ao menu"
              onPress={() => setTela(0)}
            />
          </View>

          {tela === 1 && <ListaAlunos />}
          {tela === 2 && <AlunoMedia />}
          {tela === 3 && <TelaInicial />}
          {tela === 4 && <TelaOpcoes />}
          {tela === 5 && <TelaBoasVindas />}

          {tela === 6 && (
            <Funcionario nome="Rafael" idade={16} setor="TI" />
          )}

          {tela === 7 && (
            <AlunoProps
              nome="Ana"
              idade={10}
              turma="22"
              nota1={10}
              nota2={8}
            />
          )}

          {tela === 8 && (
            <MultiplicacaoProps valor1={2} valor2={3} valor3={4} />
          )}

          {tela === 9 && <NomePopup />}
          {tela === 10 && <AlunoPopup />}
          {tela === 11 && <MultiplicacaoPopup />}
        </View>
      )}
    </View>
  );
}
