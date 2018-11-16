import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Heroes extends React.Component{
  render(){
    return(
      <View style={nbStyles.subtitle}>
          <Text style={{fontSize: 25, marginTop:20, textAlign: 'center', color: 'white', fontWeight : 'bold'}}>
            Heroes
          </Text>

          <Image
           style={{alignSelf: 'center', width: 320, height:160, marginBottom: 5, marginTop:10, }}
            source={{uri: 'https://i1.wp.com/www.fanaticbase.com/wp-content/uploads/2017/11/img_2687.png?resize=2001%2C1125&ssl=1'}}
          />

          <Image
           style={{alignSelf: 'center', width: 320, height:160, marginBottom: 5, marginTop:5, }}
            source={{uri: 'http://www.dosokaze.com/wp-content/uploads/2018/10/Screenshot_2018-10-03-20-14-43-98.png'}}
          />

          <Image
           style={{alignSelf: 'center', width: 320, height:160, marginBottom: 30, marginTop:5, }}
            source={{uri: 'https://guideeater.com/wp-content/uploads/2018/07/word-image-1.jpeg'}}
          />

        </View>
    );
  }
}

const nbStyles = {
    subtitle: {
      backgroundColor: '#3B3C36',

    },
    btn: {
      alignItems: 'center',
      marginTop: 30,
      borderRadius: 25,
    },
  }