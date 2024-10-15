import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
/**
 * 路由与导航
 * 1：基础组件
 * 2：Stack导航
 * 3：BottomTab导航
 * 4：Drawer导航
 * 5：MaterialTopTab导航
 */

/* Stack导航 */
import StackIndex from './Stack导航/index';
export default function index() {
  return (
    <>
      {/* <Text>index</Text> */}
      <StackIndex></StackIndex>
    </>
  );
}

const styles = StyleSheet.create({});
