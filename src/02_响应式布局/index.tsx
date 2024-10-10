import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

export default function index() {
  return (
    <View>
      <Text>响应式布局</Text>
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.text}>扫一扫</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>付款码</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>卡包</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.text}>出行</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: Dimensions.get('window').width / 5,
    height: 100,
    borderWidth: 1,
    backgroundColor: '#00b38a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});
