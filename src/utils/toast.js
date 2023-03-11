import {Platform, AlertIOS, ToastAndroid} from 'react-native';


export function showToastWithGravity(message){
  switch (Platform.OS) {
    case "android": {
      return ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      
    }
    case "ios": {
      
      break;
    }
    default: {
      console.log(message, Platform.OS);
    }
  }
   
};

export function errorToast(message){
  switch (Platform.OS) {
    case "android": {
      return ToastAndroid.showWithGravity(
        message,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      
    }
    case "ios": {
      
      break;
    }
    default: {
      console.log(message, Platform.OS);
    }
  }
};

  