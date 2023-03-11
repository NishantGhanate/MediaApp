// NewFlastList.js
import React from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import {styles, cardStyle} from '../styles/defaultStyle';

// definition of the Item, which will be rendered in the FlatList
const CardItem = ({item, navigation, screenName}) => (
<TouchableOpacity 
  style={cardStyle.item}
  onPress={() => navigation.navigate(screenName, {'videoData' : item, 'pageTitle' : item.title})}>
    
    <Image
      style={cardStyle.imageCard}
      source= {{ uri: item.thumbnail, headers: { 'Accept': 'image/*'} }}
      resizeMode="contain"
    />

    <Text style={cardStyle.title}>
      {item.title}
    </Text>


    <Text style={cardStyle.language}>
      {item.language.name}
    </Text>

    <Text style={cardStyle.year}>
      {item.released_date.slice(0,4)}
    </Text>

</TouchableOpacity>
);

// the filter
const NewFlatList = ({ searchPhrase, setClicked, data,  navigation, screenName, refreshing, onRefresh}) => {
  
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return <CardItem item={item} navigation={navigation} screenName={screenName} />;
    }
    // filter of the name
    if (item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <CardItem item={item} navigation={navigation}  screenName={screenName}/>;
    }
    // // filter of the description
    if (item.description.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <CardItem item={item} navigation={navigation} screenName={screenName} />;
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

export default NewFlatList;

