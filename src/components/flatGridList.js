import React from "react";
import {FlatGrid} from 'react-native-super-grid';

import {
  Text,
  TouchableOpacity,
  Image
} from "react-native";

import {styles} from '../styles/defaultStyle';
import {gridStyle} from '../styles/gridStyle';

const GridCardItem = ({item, navigation, screenName}) => (
	<TouchableOpacity 
		onPress={() => navigation.navigate(screenName, {'videoData' : item, 'pageTitle' : item.channel_name})}>
	
			<Image
				style={gridStyle.imageCard}
				source= {{ uri: item.thumbnail, headers: { 'Accept': 'image/*'} }}
				resizeMode="cover"
			/>
			<Text style={gridStyle.itemName} >{item.channel_name}</Text>
			<Text style={gridStyle.itemCode}></Text>
	
	</TouchableOpacity>
);

// the filter
const GridList = ({ searchPhrase, setClicked, data,  navigation, screenName, refreshing, onRefresh}) => {
	const renderItem = ({ item }) => {
    // when no input, show all

    if (searchPhrase === "") {
      return <GridCardItem item={item} navigation={navigation} screenName={screenName} />;
    }
    // filter of the name
    if (item.channel_name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <GridCardItem item={item} navigation={navigation}  screenName={screenName}/>;
    }
    
  };

	return (
    <FlatGrid
      data={data}
			spacing={15}
			style={gridStyle.gridView}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );

}

export default GridList;