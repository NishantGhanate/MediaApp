
import React, {Component} from 'react';
import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  Platform
} from 'react-native';

import NewFlatList from '../components/newFlatList';
import SearchBar from '../components/searchBar';

import {showToastWithGravity, errorToast} from '../utils/toast';
import {styles, cardStyle, searchStyle} from '../styles/defaultStyle';

import {SERVER_URL, VIDEO_API} from '@env';

const URL = SERVER_URL + VIDEO_API


const MOCK_JSON = {
  "status_code": 200,
  "success": true,
  "message": "Data fetched successfully",
  "data": {
      "links": {
          "next": null,
          "previous": null
      },
      "count": 3,
      "results": [
          {
              "id": 4,
              "language": {
                  "name": "Hindi",
                  "slug": "hindi"
              },
              "category": {
                  "name": "Movie",
                  "slug": "movie"
              },
              "genre": [
                  {
                      "name": "Action",
                      "slug": "action"
                  }
              ],
              "title": "Music Box",
              "title_slug": "music-box",
              "description": "NEW",
              "m3u8_file_path": "https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/master.m3u8",
              "thumbnail": "https://camo.githubusercontent.com/be068e94662c8149d7e3befb96c228dfe1a43b4825efb198feaca4b377c3f239/68747470733a2f2f692e696d6775722e636f6d2f516a4a596f68472e706e67",
              "released_date": "2023-01-08",
              "duration": "00:01:03.616000",
              "dimension": "1920x1080",
          },
          {
              "id": 2,
              "language": {
                  "name": "Hindi",
                  "slug": "hindi"
              },
              "category": {
                  "name": "Movie",
                  "slug": "movie"
              },
              "genre": [
                  {
                      "name": "Action",
                      "slug": "action"
                  }
              ],
              "title": "B",
              "title_slug": "b",
              "description": "",
              "m3u8_file_path": "https://abplivetv.akamaized.net/hls/live/2043010/hindi/master.m3u8",
              "thumbnail": "https://camo.githubusercontent.com/806fcdb9ecf2f5882b65282c7e3a9193d6db6e544c7809adffbb069e3d824be5/68747470733a2f2f692e696d6775722e636f6d2f444b48554656512e706e67",
              "released_date": "2023-01-07",
              "uploaded_date": "2023-01-07T22:58:55.644742+05:30",
              "duration": "00:00:21.760000",
              "file_size": "15420k",
              "dimension": "1920x1080",
              "display_aspect_ratio": "-",
              "overall_bit_rate": "5669",
              "video_bitrate": "5680",
              "audio_bitrate": "2"
          },
          {
              "id": 1,
              "language": {
                  "name": "English",
                  "slug": "english"
              },
              "category": {
                  "name": "Movie",
                  "slug": "movie"
              },
              "genre": [
                  {
                      "name": "Thriller",
                      "slug": "thriller"
                  }
              ],
              "title": "Bigger Blaze",
              "title_slug": "bigger-blaze",
              "description": "This is Thrill movie",
              "video_file_path": "http://127.0.0.1:8000/media/Movie/English/bigger-blaze/ForBiggerEscapes.mp4",
              "m3u8_file_path": "/Movie/English/bigger-blaze/ForBiggerEscapes_hls.m3u8",
              "thumbnail": "https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
              "released_date": "2022-08-09",
              "uploaded_date": "2022-08-09T21:51:07.926835+05:30",
              "duration": "00:00:15.045000",
              "file_size": "2246k",
              "dimension": "1280x720",
              "display_aspect_ratio": "-",
              "overall_bit_rate": "1194",
              "video_bitrate": "1003",
              "audio_bitrate": "188"
          }
      ]
  }
}


class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pagination : {},
      isLoading: true,
      searchPhrase : ''
    };
    this.navigation = this.props.navigation
    this.screenName = 'VideoPlayScreen'
  }
  
  componentDidMount() {
    showToastWithGravity('Loading data');

    this.setState({
      isLoading : false,
      data : MOCK_JSON['data']['results'],
      enableScrollViewScroll: true
    });

  }

  componentWillUnmount() {
    console.log('component unmounted');
  }

  searchApi = (event) => {
    
    var textSearch = '';
    if (Platform.OS == 'android'){
      textSearch = event.nativeEvent.text
    }
    else if (Platform.OS == 'ios'){
      
    }
    else{
      textSearch = event.target.value
    }

    console.log(textSearch);
    // Make search api call 
  }

  setClicked = (isClicked) => {
    this.setState({
      clicked : isClicked
    });

  }

  setSearchPhrase = (searchPhrase) => {
    // console.log(searchPhrase);
    this.setState({
      searchPhrase : searchPhrase
    });
  }

  _setRefreshing = (isLoading) => {
    this.setState({
      isLoading : isLoading
    });
  }

  _onReresh = () => {

    this._setRefreshing(true);

    setTimeout(() => {
      this._setRefreshing(false);
    }, 2000);

  }

  render() {
    const {data} = this.state;
    
    return(
      <SafeAreaView style={styles.container}>
        <SearchBar
          searchPhrase={this.state.searchPhrase}
          setSearchPhrase={this.setSearchPhrase}
          clicked={this.state.clicked}
          setClicked={this.setClicked}
          searchApi = {this.searchApi}
        />
          { this.state.isLoading ? <ActivityIndicator /> : (
          
          <NewFlatList
            searchPhrase={this.state.searchPhrase}
            data={data}
            setClicked={this.setClicked}
            navigation={this.navigation}
            screenName = {this.screenName}
            refreshing={this.state.isLoading}
            onRefresh={this._onReresh}
          />

        )}
        
        
      </SafeAreaView>
    );
  }

}

export default HomeScreen;