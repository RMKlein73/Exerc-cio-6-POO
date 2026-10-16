
import React from 'react';
import { View, Text } from 'react-native';

export default function TelaOpcoes() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={{
        height: '40%',
        justifyContent: 'space-between'
      }}>
        <Text>TERCEIRO</Text>
        <Text>SEGUNDO</Text>
        <Text>PRIMEIRO</Text>
      </View>

      <View style={{
        flex: 1,
        borderTopWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <Text>3</Text>
        <Text>2</Text>
        <Text>1</Text>
      </View>
    </View>
  );
}
