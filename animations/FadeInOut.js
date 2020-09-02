/*
    Here we are using opacity property of the fading object.
    If we want fade in then we chnage opacity value from 0 to 1.
    and if we want fade out then we change value from 1 to 0
*/

import React, { useState } from 'react';
import {
    View,
    Animated,
    Button,
    Text
} from 'react-native';

import { GlobalStyles } from './GlobalStyles'

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
        <View style={[{alignItems: 'center', justifyContent: 'center'}, GlobalStyles._mainContainer]}>
            <Text style={GlobalStyles._heading}>Fading Animation</Text>
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
            <View style={GlobalStyles._btnView}>
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

export default FadeInOut;
