import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
/* 切记！！！！不要按照官网的教程来，否则会报错！！！！，看github的源码，example示例文件夹中有代码，WebView外面一定要套一个View或元素，否则会白屏，任何报错都没有提示，直接白屏，真他娘的离谱！！！！ */
export default function index() {
  return (
    <SafeAreaView style={{height: "100%", borderWidth: 1, borderColor: 'red'}}>
      <WebView
        originWhitelist={['*']}
        source={{
          uri: 'https://h5.dolilive.com/doli-h5-page/dev/20/index.html#/weeklyStar',
        }}
        scalesPageToFit={true}
        allowsInlineMediaPlayback={true}
        onLoadStart={() => {
          console.log('WebView加载开始');
        }}
        onLoadEnd={() => {
          console.log('WebView加载结束');
        }}
        style={{width: '100%', height: '90%'}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
