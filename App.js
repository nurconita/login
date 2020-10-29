import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const App = () => {
  return (
    <View style={styles.container}>
     <Image source={{uri: "https://codelatte.org/wp-content/uploads/2018/07/fixcil.png"}} style={{width: 100, height: 100}}/> <br />
     
     <TextInput style={styles.name}
    ></TextInput><br />
     <TextInput  secureTextEntry={true} style={styles.password}></TextInput>
     <TouchableOpacity>
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>LOGIN</Text>
        </View>
      </TouchableOpacity>
    </View>
    
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  name:{
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: responsiveHeight(1.1)
  },
  password:{
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: responsiveHeight(1.1)

  },
  viewButton: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    alignItems: 'center',
    backgroundColor: '#43b2ec',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: responsiveHeight(1.1)
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
