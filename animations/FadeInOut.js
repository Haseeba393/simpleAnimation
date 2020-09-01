import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    Button,
    Text
} from 'react-native';

function FadeInOut () {

    const fadeValue = useState(new Animated.Value(1))[0];

    //function to perform fading in animation
    function _fadeinAnimation(){
        Animated.timing(fadeValue,{
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
        }).start();
    }

    //function to perform fading out animation
    function _fadeoutAnimation(){
        Animated.timing(fadeValue,{
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
        }).start();
    }

    return (
        <View style={Styles._mainContainer}>
            <Text style={Styles._heading}>Fading Animation</Text>
            <Animated.View
                style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                backgroundColor: 'orange',
                marginBottom: 30,
                opacity: fadeValue
                }} 
            />
            <View style={Styles._btnView}>
                <Button 
                title='Fade In'
                onPress={_fadeinAnimation}
                />
                <Button 
                title='Fade Out'
                onPress={_fadeoutAnimation}
                />
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    _heading:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        position: 'absolute',
        top: 100
    },
    _btnView:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
});

export default FadeInOut;
