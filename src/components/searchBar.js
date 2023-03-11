import React from 'react';
import {
  View,
  TextInput,
  Keyboard
} from 'react-native';

import {searchStyle} from '../styles/defaultStyle';
import {Feather, Entypo} from "@expo/vector-icons";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked, searchApi}) => {
    return (
      <View style={searchStyle.container}>
        <View
          style={ searchStyle.searchBar__unclicked}
          >
          {/* search Icon */}
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ marginLeft: 1 }}
          />
          {/* Input field */}
          <TextInput
            style={searchStyle.input}
            placeholder="Search"
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            onSubmitEditing={searchApi}
            onFocus={() => {
              setClicked(true);
            }}
          />
          {/* cross Icon, depending on whether the search bar is clicked or not */}
          {clicked && (
            <Entypo name="cross" size={20} color="black" style={{ marginLeft: -15 }} onPress={() => {
                [setSearchPhrase(""),  Keyboard.dismiss(), setClicked(false)]
            }}/>
          )}
        </View>
        
      </View>
    );
};

export default SearchBar;