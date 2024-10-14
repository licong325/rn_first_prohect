import {Button, Image, StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
/* react-native-image-picker 调用相机或相册，比react-native-vision-camera好用 */
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function index() {
  const [imgUrl, setImgUrl] = React.useState('');

  return (
    <View>
      <Text>index</Text>
      {/* 调用相机 */}
      <Button
        title="拍照"
        onPress={() => {
          console.log('123', 123);
          launchCamera(
            {
              mediaType: 'photo' /* 相机类型 */,
              maxWidth: 1000, // 设置选择照片的大小，设置小的话会相应的进行压缩
              maxHeight: 1000,
              quality: 0.8,
              // videoQuality: 'low',
              // includeBase64: true
            },
            res => {
              console.log('res-----', res);
              if (res.assets) {
                setImgUrl(res.assets[0].uri);
              }
              if (res.didCancel) {
                Alert.alert('取消');
                return false;
              }
              // 对获取的图片进行处理
            },
          );
        }}
      />
      <Image
        style={{width: 200, height: 200, borderWidth: 1, borderColor: 'red'}}
        source={{uri: imgUrl}}
      />
      {/* 调用相册 */}
      <Button
        title="相册"
        onPress={() => {
          launchImageLibrary(
            {
              mediaType: 'photo',
              maxWidth: 1000,
              maxHeight: 1000,
              quality: 0.8,
            },
            response => {
              console.log('res-----', response);
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else {
                setImgUrl(response.assets[0].uri);
              }
            },
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
