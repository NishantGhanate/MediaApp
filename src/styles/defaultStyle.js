
import {StyleSheet} from 'react-native';
  

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#11191F',
      justifyContent: 'center',
    },
    searchBar : {
      paddingTop: 10,
      margin: 15,
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      width: "90%",
      backgroundColor: '#11191F',
    },
    contentContainer: {
      marginTop: 50,
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    title: {
      fontSize: 20,
      color: '#fff',
    },
    scrollContainer: {
      flex: 1,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: '#CED6DC',
      backgroundColor : '#15212A',
      borderColor: '#fff',
      placeholderTextColor: "#CED6DC" 
    },
    scrollContentContainer: {
      alignItems: 'center',
    },
    imageContainer: {
      marginBottom: 14,
      alignItems: 'center',
    },


    sectionHeader: {
      flex: 1,
      fontSize: 15,
      fontWeight: '600',
      alignItems: 'center',
      backgroundColor: '#636e72',
      color: 'white',
      padding: 10,
    },
    videoPlayer : {
      padding: 12,
    }
    
});

export const cardStyle = StyleSheet.create({
  item: {
    backgroundColor: '#11191F',
    padding: 5,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  imageCard: {
    borderRadius: 14,
    width: 100,
    height: 100,
    // resizeMode : 'contain'
  },
  title : {
    position: 'absolute',
    fontSize: 16,
    color: '#CED6DC',
    marginLeft: 120,
    marginTop: 10,
  },
  year : {
    position: 'absolute',
    fontSize: 12,
    color: '#CED6DC',
    marginLeft: 120,
    marginTop: 50,
  },
  language : {
    position: 'absolute',
    fontSize: 12,
    color: '#CED6DC',
    marginLeft: 155,
    marginTop: 50,
  },

});

export const videoStyle = StyleSheet.create({
  container: {
    zIndex:0,
    flex:1,
    backgroundColor: '#11191F'
    // justifyContent: 'center',
  },
});


export const themes = StyleSheet.create({
  blueTheme : {
    backgroundColor: '#11191F',
    placeholderTextColor: "#CED6DC" 
  },
  whiteTheme : {

  }
});


export const searchStyle = StyleSheet.create({
  container: {

    paddingTop: 60,
    margin: 15,
    
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    color: '#CED6DC'
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "100%",
    color: "red",
    backgroundColor: "#d9dbda",
    borderRadius: 28,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});