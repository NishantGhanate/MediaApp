import React, {Component} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';

import {styles} from '../styles/defaultStyle';
import { videoStyle } from '../styles/defaultStyle';
import { Video, AVPlaybackStatus } from 'expo-av';
import * as ScreenOrientation from 'expo-screen-orientation';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.9;
const ITEM_HEIGHT = ITEM_WIDTH / 11 * 9 ;

class VideoPlayScreen extends Component {

  constructor(props){
    super(props)

    this.state = {
      videoData : {},
      isLoading : true
    }

  }

  componentDidMount() {
    console.log(this.props);

    this.props.navigation.setOptions({
      title: this.props.route.params.pageTitle,
    })

    this.setState({
      videoData : this.props.route.params.videoData,
      isLoading : false
    })
    
  }

  componentWillUnmount(){

  }
  
  setOrientation() {
    if (Dimensions.get('window').height > Dimensions.get('window').width) {
      //Device is in portrait mode, rotate to landscape mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    else {
      //Device is in landscape mode, rotate to portrait mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }

  render() {
    const {videoData} = this.state
    
    return (
      <SafeAreaView style={styles.container}>
        {
          this.state.isLoading ? <ActivityIndicator /> : (
            <Video
              source={{ uri:  videoData.m3u8_file_path}}
              useNativeControls={true}
              resizeMode="contain"
              showPoster={true}
              // shouldPlay={true}
              // onFullscreenUpdate={this.setOrientation}
              style={[{width : width, height: 100, }, videoStyle.videoPlayer]}/>
          )
        }
      </SafeAreaView>
    );
  }
}

export default VideoPlayScreen;