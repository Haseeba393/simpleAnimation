import {
    StyleSheet
} from 'react-native';

export const GlobalStyles = StyleSheet.create({
    _mainContainer:{
        flex: 1,
        padding: 20
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
    _placeBottom:{
        position: 'absolute',
        bottom: 50,
        width: '100%',
        alignSelf: 'center'
    }
});