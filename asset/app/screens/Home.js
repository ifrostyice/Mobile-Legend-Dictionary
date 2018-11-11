import React from 'react';
import {Container, Content, Text, Thumbnail, Button} from 'native-base';

export default Home = (props) => (
    <Container style={{justifyContent: "center", alignSelf: "center"}}>
        <Content>
            <Thumbnail 
            large 
            source={{uri:'https://4.bp.blogspot.com/-XvS5CPUQS1Q/WuPyXz5zWQI/AAAAAAAANdQ/y2B11qhhXK85DzSqatMUQx7rdQAkGwRKgCLcBGAs/s1600/Mobile%2BLegend.png'}} 
            style={{alignItems:'center', width: 250, height: 200}}
            />
            <Text style={nbStyles.subtitle}>
                Welcome To Mobile Legends 
            </Text>
            <Text style={nbStyles.subtitle}>
                Heroes Dictionary
            </Text>
            <Text style={nbStyles.subtitle}>
                Start Exploring/Creating 
            </Text>
            <Text style={nbStyles.subtitle}>
                Your Favourites Heroes
        </Text>

        <Button block 
        style={nbStyles.btn} 
        onPress={() => props.navigator.switchToTab({
            tabIndex: 1
        })}
        >
            <Text>Start</Text>
        </Button>
        </Content>
    </Container>
)


const nbStyles = {
    subtitle: {
        textAlign: 'center',
        color: '#ACD2FA'
    },
    btn: {
        MarginTop: 15
    }
} 
