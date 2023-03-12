import {Platform} from 'react-native';

export function keyboardInput(fn){
    return function (event) {
        var textSearch = '';
        if (Platform.OS == 'android'){
            textSearch = event.nativeEvent.text
        }
        else if (Platform.OS == 'ios'){
            
        }
        else{
            textSearch = event.target.value
        }
        return fn.call(this, textSearch);
    }
}

export function loggerDecorator(fn) {
    return function (message) {
       
    }
}