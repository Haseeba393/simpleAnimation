import React, {useState} from 'react';
import {
    SafeAreaView,
    Animated,
    View,
    Button,
    Text
} from 'react-native';

import { GlobalStyles } from './GlobalStyles';

function Rotation(){

    const rotation = useState(new Animated.Value(0))[0];
    const [isRotated, setIsRotated] = useState(false);

    const rotateInterpolate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    //function to do rotation
    function _doRotation(){
        if(isRotated)
            setIsRotated(false);
        else
            setIsRotated(true);

        Animated.timing(rotation,{
            toValue: isRotated ? 0 : 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }

    return(
        <SafeAreaView style={[{alignItems: 'center', justifyContent: 'center'}, GlobalStyles._mainContainer]}>
            <Text style={GlobalStyles._heading}>Rotation Animation</Text>
            <Animated.View 
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 10,
                    backgroundColor: 'orange',
                    transform : [{rotate: rotateInterpolate}]
                }}
            />
            <View style={GlobalStyles._placeBottom}>
                <Button 
                    title='Rotate Box'
                    onPress={_doRotation}
                />
            </View>
        </SafeAreaView>
    );
}

export default Rotation;