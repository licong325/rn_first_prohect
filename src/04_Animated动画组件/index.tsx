import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';
export default function index() {
  // fadeAnim 将用于透明度改变，默认为0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    if (fadeAnim._value == 1) {
      Alert.alert('元素已显示');
      return;
    }
    /* 控制元素显示动画 */
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      /* 动画执行完毕，执行回调函数 */
      Alert.alert('显示动画执行完毕');
    }); /* 开始动画,否则不执行 */
  };

  const fadeOut = () => {
    if (fadeAnim._value == 0) {
      Alert.alert('元素已隐藏');
      return;
    }
    /* 控制元素隐藏动画 */
    Animated.timing(fadeAnim, {
      toValue: 0 /* 要改变为的新值 */,
      duration: 1000 /* 动画持续时间 */,
      useNativeDriver: true /* 是否使用原生驱动 */,
    }).start(() => {
      /* 动画执行完毕，执行回调函数 */
      Alert.alert('隐藏动画执行完毕');
    });
  };

  /* 控制扫描线动画 */
  const scanLine = useRef(new Animated.Value(0)).current;
  /* 向下移动 */
  const scanLineStart = () => {
    Animated.timing(scanLine, {
      toValue: 120,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      scanLineFinish();
    });
  };
  /* 向上移动 */
  const scanLineFinish = () => {
    Animated.timing(scanLine, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      scanLineStart();
    });
  };

  /* 组件刚挂载完成执行 */
  useEffect(() => {
    /* 调用扫描线开始动画 */
    scanLineStart();
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* Animated组件（动画组件） */}
        {/* rn中可以直接使用的动画组件
          1：Animated.View
          2：Animated.Text
          3：Animated.ScrollView
          4：Animated.Image
        */}
        <Text style={styles.herderText}>Animated组件（动画组件）</Text>
        {/* 步骤：
          1：创建初始值
            Animated.Value(0=) 单个值
            Animated.ValueXY({x:0,y:0}) 两个值(向量值)
          2：将初始值绑定在动画组件上
            一般将其绑定到某个样式属性下，例如：opacity,translate
          3：通过动画类型API，一帧一帧的改变初始值
            1:Animated.decay() 加速效果
            2:Animated.spring() 弹簧效果
            3:Animated.timing() 时间渐变效果    大部分用这个
        */}
        {/* 元素渐隐渐出 */}
        <SafeAreaView style={styles.container}>
          <Animated.View
            style={[
              styles.fadingContainer,
              {
                opacity: fadeAnim /* 透明度变量 */,
              },
            ]}>
            <Text style={styles.fadingText}>Fading View!</Text>
          </Animated.View>
          <View style={styles.buttonRow}>
            <Button title="Fade In View" onPress={fadeIn} />
            <Button title="Fade Out View" onPress={fadeOut} />
          </View>
        </SafeAreaView>
        {/* 扫描线动画 */}
        <SafeAreaView style={styles.container}>
          <Animated.View
            style={[
              {
                transform: [
                  {
                    translateY: scanLine,
                  },
                ],
              },
            ]}>
            <View
              style={{
                borderWidth: 1,
                borderTopColor: 'green',
                width: 200,
              }}></View>
          </Animated.View>
        </SafeAreaView>
      </View>
    </>
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
  herderText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});
