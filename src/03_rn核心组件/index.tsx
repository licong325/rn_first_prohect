import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  Switch,
  StatusBar,
  ActivityIndicator,
  Platform,
  ScrollView,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SectionList,
  SafeAreaView,
  FlatList,
} from 'react-native';

export default function index() {
  // 判断平台
  // Platform.OS === 'ios' ? Alert.alert('iOS平台') : Alert.alert('Android平台');

  // Button和Alert
  const createTwoButtonAlert = () => {
    // 按钮的style有的手机可以看到，有的看不到
    Alert.alert('两个按钮弹框标题', '内容', [
      {
        text: '确定',
        onPress: () => {
          console.log('确定');
        },
        style: 'destructive',
      },
      {
        text: '取消',
        onPress: () => {
          console.log('取消');
        },
        style: 'cancel',
      },
    ]);
  };
  const createThreeButtonAlert = () => {
    Alert.alert('三个按钮弹框', '内容', [
      {
        text: '稍后',
        onPress: () => {
          console.log('稍后');
        },
      },
      {
        text: '确定',
        onPress: () => {
          console.log('确定');
        },
      },
      {
        text: '取消',
        onPress: () => {
          console.log('取消');
        },
      },
    ]);
  };

  /*   -------------------------------------------------------------------*/

  // Switch和StatusBar组件
  const [StatusBarHidden, setStatusBarHidden] = React.useState(false);
  const [isEnabled, setIsEnabled] = React.useState(false);

  /* -------------------------------------------------------------------- */

  // TextInput组件
  const [TextInputValue, ChangeTextInputValue] = React.useState('');
  const [userData, setUserData] = React.useState({
    username: '',
    password: '',
  });

  /*  -------------------------------------------------------------------- */

  // SectionList 组件数据
  const DATA = [
    {
      title: '第一个',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: '第二个',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: '第三个',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: '第四个',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  /*  -------------------------------------------------------------------- */

  // FlatList 组件数据
  const FlatListDATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29sdasdd72',
      title: 'fourth Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145fsvxczds571e29d72',
      title: 'fifty Item',
    },
  ];
  return (
    <ScrollView>
      <Text>RN核心组件</Text>

      {/* ---------------------------------------------------------------------- */}

      {/* Button和Alert */}
      <View style={style.container}>
        <Text>Alert和Button</Text>
        {/* 这里的alert是js中的函数 */}
        <Button
          title="js中的alert"
          onPress={() => {
            alert('按钮被点击');
          }}></Button>
        {/* 这是rn中的Alert */}
        <Button
          title="RN中的Alert"
          onPress={() => {
            Alert.alert('按钮被点击');
          }}
          color={'hotpink'}></Button>

        <Button
          title="两个按钮"
          onPress={createTwoButtonAlert}
          color={'green'}></Button>

        <Button
          title="三个按钮"
          onPress={createThreeButtonAlert}
          color={'gold'}></Button>
      </View>

      {/* ---------------------------------------------------------------------- */}

      {/* Switch开关和StatusBar状态栏组件 */}
      <View style={style.container}>
        <Text>Switch和StatusBar组件</Text>
        {/* 状态栏 */}
        <StatusBar
          hidden={StatusBarHidden} /* 是否隐藏状态栏 */
          backgroundColor={'red'} /* 背景色仅在安卓下有效*/
          barStyle={'light-content'} /* 状态栏样式 light-content dark-content */
        ></StatusBar>
        <Button
          title={`点击${StatusBarHidden ? '显示' : '隐藏'}状态栏`}
          onPress={() => {
            setStatusBarHidden(!StatusBarHidden);
          }}
        />
        {/* Switch组件 */}
        <Switch
          trackColor={{false: 'red', true: 'green'}} /* 背景颜色 */
          thumbColor={isEnabled ? 'pink' : 'blue'} /* 滑动小球颜色 */
          value={isEnabled} /* 默认值 */
          onValueChange={value => {
            console.log(value);
            setIsEnabled(value);
          }} /* 点击回调 */
        />
      </View>

      {/* ---------------------------------------------------------------------- */}

      {/* ActivityIndicator 显示一个圆形的 loading 提示符号。安卓和 iOS 都支持，样式不同*/}
      <View style={style.container}>
        <Text>ActivityIndicator组件</Text>
        <ActivityIndicator
          size={'small'} /* 大小，只能在安卓下使用 数值 */
          color={'blue'} /* 颜色 */
          animating={true} /* 是否显示 */
        />
        <ActivityIndicator
          size={'large'}
          color={'green'}
          animating={true}
          style={{margin: 30}}
        />
        <ActivityIndicator size={100} color={'pink'} animating={true} />
      </View>

      {/* ---------------------------------------------------------------------- */}

      {/* Image组件 */}
      <View style={style.container}>
        <Text>Image组件</Text>
        <Image
          source={require('../images/13.png')} /* 本地路径需要使用require引入 */
          style={{width: 260, height: 200, marginBottom: 20}}
        />
        <Image
          source={{
            uri: 'https://p26.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/22f10850c5234b5285350743cfa16357' /* uri使用网络地址，也可以使用base64 */,
          }}
          style={{width: 260, height: 200, resizeMode: 'contain'}}
        />
      </View>

      {/* ---------------------------------------------------------------------- */}

      {/* TextInput组件 */}
      <View style={style.container}>
        <Text>TextInput组件</Text>
        <TextInput
          style={{
            width: Dimensions.get('window').width - 20,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            backgroundColor: TextInputValue /* 可以直接将输入的值应用于样式 */,
          }}
          placeholder="输入内容,可以直接输入颜色应用于背景色"
          onChangeText={text => ChangeTextInputValue(text)} /* 文本改变的回调 */
          value={TextInputValue} /* 默认值 */
        />
        <TextInput
          style={{
            width: Dimensions.get('window').width - 20,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            backgroundColor: 'white',
            marginTop: 30,
          }}
          placeholder="输入用户名"
          keyboardType="number-pad"
          onChangeText={text => {
            setUserData({
              ...userData,
              username: text,
            });
          }}
        />
        <TextInput
          style={{
            width: Dimensions.get('window').width - 20,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            backgroundColor: 'white',
            marginTop: 30,
          }}
          placeholder="输入密码"
          secureTextEntry={
            true
          } /* 如果为 true，文本框会遮住之前输入的文字，多行文本时不可用 */
          onChangeText={text => {
            setUserData({
              ...userData,
              password: text,
            });
          }}
        />
        <View
          style={{width: Dimensions.get('window').width - 20, marginTop: 10}}>
          <Button
            title="登录"
            onPress={() => {
              Alert.alert(
                '登录成功',
                `登录内容为：${JSON.stringify(userData)}`,
              );
              setUserData({
                username: '',
                password: '',
              });
            }}></Button>
        </View>
      </View>

      {/* ---------------------------------------------------------------------- */}

      {/* Touchable组件部分（触控组件） */}
      {/* TouchableHighlight和TouchableOpacity组件 */}
      <View style={style.container}>
        <Text>TouchableHighlight组件</Text>
        <TouchableHighlight onPress={() => Alert.alert('Pressed!')}>
          <Text style={{padding: 20, borderWidth: 1, color: 'red'}}>
            触碰变高亮
          </Text>
        </TouchableHighlight>

        <Text>TouchableOpacity</Text>
        <TouchableOpacity onPress={() => Alert.alert('Pressed!')}>
          <Text style={{padding: 20, borderWidth: 1}}>
            触碰变模糊,一般用这个
          </Text>
        </TouchableOpacity>

        <Text>TouchableWithoutFeedback</Text>
        <TouchableWithoutFeedback onPress={() => Alert.alert('Pressed!')}>
          <Text style={{padding: 20, borderWidth: 1}}>
            触碰无响应，一般不用
          </Text>
        </TouchableWithoutFeedback>
      </View>

      {/* ---------------------------------------------------------------------- */}

      {/* SectionList组件(列表分组),这是在练习，开发时不可以写在ScrollView组件里面 */}
      {/* 去txt文件下 */}

      {/* ---------------------------------------------------------------------- */}

      {/* FlatList组件（列表组件） 属性基本与SectionList组件一样，但FlatList支持水平布局，可以参考官网，开发时不可以写在ScrollView组件里面*/}
      {/* 去txt文件下 */}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
