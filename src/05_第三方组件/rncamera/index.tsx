import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useRef} from 'react';
import {
  Camera,
  useCameraPermission,
  useCameraDevice,
} from 'react-native-vision-camera';

import {CameraRoll} from '@react-native-camera-roll/camera-roll';
export default function index() {
  const {hasPermission, requestPermission} = useCameraPermission();
  if (!hasPermission) {
    return (
      <View>
        <Text>没有权限</Text>
        <Button title="请求权限" onPress={requestPermission} />
      </View>
    );
  } else {
    const device = useCameraDevice('front');
    if (device == null) return <Text>没有设备</Text>;
    const camera = useRef<Camera>(null);
    return (
      <ScrollView>
        <Camera
          ref={camera} /* 相机实例 */
          style={styles.container}
          device={device} /* 获取到的相机设备对象。 */
          isActive={true}
          photo={true} /* 启用拍照 */
          preview={true} /* 是否开启预览 */
        />
        <Button
          title="拍照"
          onPress={() => {
            console.log('拍照');
            camera.current?.takePhoto().then(res => {
              console.log(res);
              CameraRoll.save(`file://${res.path}`, {
                type: 'photo',
              }).then(res => {
                Alert.alert('保存成功');
                console.log(res);
              });
            });
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 100,
  },
});
