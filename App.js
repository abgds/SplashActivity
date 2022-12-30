import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
// import type{Node} from 'react';
import {StyleSheet,Text,View,StatusBar} from 'react-native';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();

  },[])
  

  return (
    <View>
      <StatusBar backgroundColor="#228b22" barStyle='light-content'/>
      <Text style={{color:"#228b22" , fontWeight:"bold" , fontSize:30,alignContent:"center"}}>Hello World</Text>
    </View>
     );
};

const styles = StyleSheet.create({
  
});

export default App;
