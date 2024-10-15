import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// import Index from './01_StyleSheet/index';
// import Index from './02_响应式布局/index';
// import Index from './03_rn核心组件/index';
// import Index from './04_Animated动画组件/index';
// import Index from './05_第三方组件/webview/index';
// import Index from './05_第三方组件/picker/index';
// import Index from './05_第三方组件/swiper/index';
// import Index from './05_第三方组件/asyncstorage/index';
// import Index from './05_第三方组件/geolocation/index';
// import Index from './05_第三方组件/rncamera/index';
// import Index from './05_第三方组件/imagepicker/index';
// import Loading from './05_第三方组件/zidingyizujian/index';
import Index from './路由与导航/index';

export default function App() {
  return (
    /*  <>
      <Index></Index>
    </> */
    <NavigationContainer>
      <Index></Index>
    </NavigationContainer>
  );
}
