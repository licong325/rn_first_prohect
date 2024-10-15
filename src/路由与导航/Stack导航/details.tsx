import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

/* 详情页 */
export default function DetailsScreen({navigation}: {navigation: any}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}>
      <Text>Details Screen</Text>
      <Button
        title="前往details，使用push方法，会无限增加"
        onPress={() => {
          console.log('123', 123);
          navigation.push(
            'Details',
          ); /* 如果使用push，即使已经在当前页了，还是会新增一层 */
        }}
      />
      <Button
        title="返回上一级"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="前往首页"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
       <Button
        title="返回堆栈中第一个屏幕"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
