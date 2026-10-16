
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default function TelaBoasVindas() {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      padding: 20
    }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>
        BEMVINDO
      </Text>

      <Text style={{ marginTop: 10 }}>FULANO</Text>

      <View style={{ marginTop: 80 }}>
        <Button
          title="COMPRAR"
          onPress={() => Alert.alert('Comprar')}
        />
      </View>

      <View style={{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20
      }}>
        <Button
          title="SAIR"
          onPress={() => Alert.alert('Sair')}
        />
      </View>
    </View>
  );
}
