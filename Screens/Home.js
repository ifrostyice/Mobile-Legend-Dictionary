import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Home extends React.Component{
  render(){
    return(
      <View style= {nbStyles.container}>
          <Text style={{fontSize: 20, marginTop:30, textAlign: 'center', color: 'white', fontWeight : 'bold'}}>
            Welcome to Mobile Legend
          </Text>

          <Image
           style={{alignItems: 'center', width: 300, height:150, marginBottom: 30, marginTop:30, }}
            source={{uri: 'https://4.bp.blogspot.com/-XvS5CPUQS1Q/WuPyXz5zWQI/AAAAAAAANdQ/y2B11qhhXK85DzSqatMUQx7rdQAkGwRKgCLcBGAs/s1600/Mobile%2BLegend.png'}}
          />

          <Text style={nbStyles.subtitle}>
            Heroes Dictionary
          </Text>
          <Text style={nbStyles.subtitle}>
            Start Exploring Or Creating
          </Text>
          <Text style={nbStyles.subtitle}>
            Your Favorite Heroes
          </Text>

          <Button block style={nbStyles.btn}  onPress={() => this.props.navigation.navigate('Heroes')}
          >
            <Text style={{color: '#3B3C36'}}>Start</Text>
          </Button>
        </View>
    );
  }
}

const nbStyles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B3C36',
        fontWeight : 'bold',
    },
    subtitle: {
        textAlign: 'center',
        color: 'white'
    },
    btn: {
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 25,
        backgroundColor: '#fff',
        paddingVertical: 5,
        height: 45,
        width: 200,
        alignSelf: 'center',
    },
}