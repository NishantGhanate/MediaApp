
import React, {Component} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import NewFlatList from '../components/newFlatList';
import SearchBar from '../components/searchBar';
import {styles} from '../styles/defaultStyle';

import {showToastWithGravity, errorToast} from '../utils/toast';
import {keyboardInput, loggerDecorator} from '../utils/keyboardInput';

import {SERVER_URL, VIDEO_API} from '@env';

const URL = SERVER_URL + VIDEO_API

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
    this.fetchVideosApi = this.fetchVideosApi.bind(this);
    this.fetchVideosApi = keyboardInput(this.fetchVideosApi);

  }
  
  componentDidMount() {
    showToastWithGravity('Loading data');
    // this.fetchVideosApi();
  }

  componentWillUnmount() {
    console.log('component unmounted');
    this.setState({
      enableScrollViewScroll: true
    });
  }

  async fetchVideosApi(search=''){
    console.log(search)
    this.setState({isLoading : true});
    let response;
    try {
      if(search == ''){
        response = await fetch(URL);
      }
      else{
        response = await fetch(`${URL}?search-title=${search}`);
      }
      const json = await response.json();
      console.log(json)
      this.setState({
        isLoading : false,
        data : json['data']['results'],
      });

    } catch (error) {
      console.error(error);
    }
    
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

  _onReresh = () => {
    this.fetchVideosApi();
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
          searchApi = {this.fetchVideosApi}
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