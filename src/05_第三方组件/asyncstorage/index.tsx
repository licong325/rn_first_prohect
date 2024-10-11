import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* 引入自己封装好的storage */
import Storage from './storage';
export default function index() {
  /* 直接使用api操作 */
  const storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem('my-key', value).then(() => {
        console.log('存储成功');
      });
    } catch (e) {
      // saving error
    }
  };
  return (
    /* AsyncStorage 异步持久化存储，采用key:value语法存储，相当于 localStorage */
    <View style={styles.container}>
      <Text>AsyncStorage</Text>
      {/* 直接使用api操作 */}
      {/*       <Button
        title="存储"
        onPress={() => {
          storeData('hello');
        }}></Button>
      <Button
        title="获取"
        onPress={() => {
          AsyncStorage.getItem('my-key').then(res => {
            console.log(res);
          });
        }}></Button> */}
      {/* —————————————————————————————————————————————————————————— */}

      {/* 使用自己封装好的storage */}
      <Button
        title="Storage存储"
        onPress={() => {
          Storage.set('my-key', 'hello');
        }}
      />
      <Button
        title="Storage获取"
        onPress={() => {
          Storage.get('my-key').then(res => {
            Alert.alert(res || '暂无数据');
            // console.log(res);
          });
        }}
      />
      <Button
        title="Storage清空"
        onPress={() => {
          Storage.clear();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'skyblue',
    padding: 50,
  },
});
