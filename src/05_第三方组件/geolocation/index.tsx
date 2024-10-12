import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
export default function index() {
  useEffect(() => {
    /* 获取地理位置，结果如：
    {"coords": {"accuracy": 1, "altitude": 0, "heading": 0, "latitude": 39.915000915, "longitude": 116.403999328, "speed": 0}, "extras": {"maxCn0": 0, "meanCn0": 0, "satellites": 0}, "mocked": false, "timestamp": 1728701801003}
    */
    Geolocation.getCurrentPosition(
      info => {
        console.log('info', info);
      } /*成功回调 */,
      err => {
        console.log('err', err);
      } /*失败回调 */,
      {timeout: 5000} /*配置项 */,
    );
  });

  return (
    <View>
      <Text>index</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
