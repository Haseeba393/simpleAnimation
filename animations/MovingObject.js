/*
    Here we are using Aniimated.ValueXY() to get x and y values
    simultaneously. Then we are using transform attribute of the
    moving object to move the object to its new x axis and y axis
    generated randomly in _moveBox() function
*/

import React,{useState} from 'react';
import {
    SafeAreaView,
    View,
    Animated,
    Button,
    Text,
    Dimensions
} from 'react-native';

import { GlobalStyles } from './GlobalStyles'

//getting mobilewidth and height
const mobileWidth = Dimensions.get('window').width;
const mobileHeight = Dimensions.get('window').height;

function MovingObject(){

    const initialAxis = useState(new Animated.ValueXY({x:0, y:0}))[0];

    //function to perform spring animation
    function _moveBox(){

        const randomX = Math.floor(Math.random() * (mobileWidth-100));
        const randomY = Math.floor(Math.random() * (mobileHeight-100));

        Animated.timing(initialAxis,{
            toValue: {x:randomX, y: randomY},
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }

    return(
        <SafeAreaView style={GlobalStyles._mainContainer}>
            <Text style={[{alignSelf: 'center'}, GlobalStyles._heading]}>Moving Animation</Text>
            <Animated.View 
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 20,
                    backgroundColor: 'orange',
                    marginBottom: 50,
                    transform: [
                        { translateX: initialAxis.x },
                        { translateY: initialAxis.y },
                    ]
                }}
            />
            <View style={GlobalStyles._placeBottom}>
                <Button 
                    title='Move Box Randomly'
                    onPress={_moveBox}
                />
            </View>
        </SafeAreaView>
    );
}

export default MovingObject;