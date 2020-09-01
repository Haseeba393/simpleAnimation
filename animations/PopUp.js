import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    Text,
    Button,
} from 'react-native';

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
        <View style={Styles._mainContainer}>
        <Text style={Styles._heading}>PopUp Animation</Text>
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
        <View style={Styles._btnView}>
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

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 100,
    },
});

export default PopUp;
