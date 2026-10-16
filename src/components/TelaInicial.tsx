
import React from 'react';
import { View, Text } from 'react-native';

export default function TelaInicial() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{
        height: '40%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
      }}>
        <Text>3 </Text>
        <Text>2 </Text>
        <Text>1</Text>
      </View>

      <View style={{
        flex: 1,
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text style={{ fontSize: 25 }}>HELLO WORLD</Text>
      </View>
    </View>
  );
}
