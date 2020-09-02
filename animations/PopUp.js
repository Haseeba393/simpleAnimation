/*
    Here we are using three animation which are running parallel
    to give a nice appearing effect for a popup box. In this animation
    you will learn how to start multiple animations parallel
*/
import React, { useState } from 'react';
import {
    View,
    Animated,
    Text,
    Button,
} from 'react-native';

import { GlobalStyles } from './GlobalStyles';

function PopUp () {

    const fadeValue = useState(new Animated.Value(0))[0];
    const boxHeight = useState(new Animated.Value(0))[0];
    const boxWidth = useState(new Animated.Value(0))[0];

    //function to show box appearing animation
    function _showBox(){
        Animated.parallel([
        Animated.timing(fadeValue,{
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }),
        Animated.timing(boxWidth,{
            toValue: 100,
            duration: 500,
            useNativeDriver: false
        }),
        Animated.timing(boxHeight,{
            toValue: 100,
            duration: 500,
            useNativeDriver: false
        })
        ]).start();
    }

    //function to close the box
    function _closeBox(){
        Animated.parallel([
            Animated.timing(fadeValue,{
            toValue: 0,
            duration: 500,
            useNativeDriver: false
            }),
            Animated.timing(boxWidth,{
            toValue: 0,
            duration: 500,
            useNativeDriver: false
            }),
            Animated.timing(boxHeight,{
            toValue: 0,
            duration: 500,
            useNativeDriver: false
            })
        ]).start();
    }

    return (
        <View style={[{alignItems: 'center', justifyContent: 'center'}, GlobalStyles._mainContainer]}>
        <Text style={GlobalStyles._heading}>PopUp Animation</Text>
        <Animated.View 
            style={{
            width: boxWidth,
            height: boxHeight,
            opacity: fadeValue,
            borderRadius: 20,
            marginBottom: 30,
            backgroundColor: 'orange',
            }}
        />
        <View style={GlobalStyles._btnView}>
            <Button 
            title='Show Box'
            onPress={_showBox}
            />
            <Button 
            title='Close Box'
            onPress={_closeBox}
            />
        </View>
        </View>
    );
};

export default PopUp;
