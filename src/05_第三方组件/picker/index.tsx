import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

const Item: any = Picker.Item;
export default function index() {
  const [value, setValue] = React.useState('key1');
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: value, width: Dimensions.get('window').width - 50},
      ]}>
      {/* 注意：有些属性，并不是所有平台都有效 */}
      <Picker
        style={{width: 200, height: 100}}
        testID="basic-picker"
        selectedValue={value}
        onValueChange={v => {
          console.log(v);
          setValue(v);
        }}
        accessibilityLabel="Basic Picker Accessibility Label"
        mode="dropdown">
        <Item label="红色" value="hotpink" color="gold" />
        <Item label="绿色" value="green" color="skyblue" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 120,
  },
});
