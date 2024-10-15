import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

/* 首页 */
export default function HomeScreen({navigation}: {navigation: any}) {
  /* 从prop中解构出navigation */
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
      }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          console.log('123', 123);
          navigation.navigate('Details'); /* 跳转至详情页 */
        }}
      />
      <Button
        title="返回上一级"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
