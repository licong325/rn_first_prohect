import {StyleSheet, Button, Alert} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* 首页 */
import HomeScreen from './home';
import DetailsScreen from './details';

const Stack = createNativeStackNavigator();
export default function index() {
  return (
    <>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '首页',
            headerStyle: {
              backgroundColor: 'rgb(255,99,71)',
            },
            headerTitleAlign: 'center', // 设置标题居中
            headerRight: () => (
              <Button
                onPress={() => Alert.alert('This is a button!')}
                title="right button"
                color="pink"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: '详情',
            headerTintColor: '#000', // 设置标题颜色
            headerTitleStyle: {
              // 设置标题样式
              fontWeight: 'bold',
              color: 'black',
            },
            headerTitleAlign: 'center', // 设置标题居中
          }}
        />
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({});
