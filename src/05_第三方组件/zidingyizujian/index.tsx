import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

export default function Loading({
  width = Dimensions.get('window').width,
  height = Dimensions.get('window').height,
  customText = 'loading...',
}: {
  width?: number;
  height?: number;
  customText?: string;
}) {
  return (
    <View style={[styles.loading_box, {width: width, height: height}]}>
      <ActivityIndicator size="large" />
      <Text style={styles.loading_text}>{customText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loading_box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  loading_text: {
    fontSize: 20,
    color: 'black',
  },
});
