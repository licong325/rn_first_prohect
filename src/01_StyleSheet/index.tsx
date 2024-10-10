import React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';

export default function index() {
  const texts = Array.from({length: 10}).map((_, index) => (
    <Text key={index} style={styles.text}>
      样式列表测试 - {index + 1}
    </Text>
  ));

  return <View style={styles.container}>{texts}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
  },
  text: {
    width: 300,
    color: 'blue',
    fontSize: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'green',
    margin: 10,
  },
});
