//NOTE: While using spring animtion you can only
//add of these attribute's pairs in Animated.Spring()
//1. bounciness/speed
//2. mass/damping/stifness
//3. tension/friction

/*
    In this demo, we are using translateX of the moving object.
    You can use translateY in the same way to move the object
    in X and Y axis. You can use Animated.parallel() function to
    perform parallel animations. You can see its example in
    PopUp box animation in animations directory
*/

import React,{useState} from 'react';
import {
    StyleSheet,
    View,
    Animated,
    Button,
    Text
} from 'react-native';

import { GlobalStyles } from './GlobalStyles'

function Spring(){

    const Xaxis = useState(new Animated.Value(10))[0];

    //function to perform spring animation
    function _doSpringAnimation(){
        Animated.spring(Xaxis,{
            toValue: 100,
            useNativeDriver: false,
            speed: 1,
            bounciness: 15,
        }).start();
    }

    //function to reset spring animation
    function _resetSpringAnimation(){
        Animated.spring(Xaxis,{
            toValue: 10,
            useNativeDriver: false,
            speed: 1,
            bounciness: 15
        }).start();
    }

    return(
        <View style={Styles._mainContainer}>
            <Text style={[{alignSelf: 'center'}, GlobalStyles._heading]}>Spring Animation</Text>
            <Animated.View 
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 20,
                    backgroundColor: 'orange',
                    marginBottom: 50,
                    translateX: Xaxis,
                    translateY: 250
                }}
            />
            <View style={[{alignSelf: 'center'} , GlobalStyles._btnView]}>
                <Button 
                    title='Move Box'
                    onPress={_doSpringAnimation}
                />
                <Button 
                    title='Reset Box'
                    onPress={_resetSpringAnimation}
                />
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        padding: 40,
    },
});

export default Spring;