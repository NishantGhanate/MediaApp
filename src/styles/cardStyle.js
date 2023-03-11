import { StyleSheet } from 'react-native';

export const cardStyle = StyleSheet.create({
    item: {
      backgroundColor: '#15212A',
      padding: 5,
      marginVertical: 4,
      marginHorizontal: 8,
    },
    imageCard: {
      borderRadius: 14,
      width: 100,
      height: 100,
    },
    title : {
      position: 'absolute',
      fontSize: 16,
      fontWeight: '600',
      color: '#CED6DC',
      marginLeft: 120,
      marginTop: 10,
    },
    category : {
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
      marginLeft: 120,
      marginTop: 50,
    },
    year : {
      position: 'absolute',
      fontSize: 12,
      color: '#CED6DC',
      marginLeft: 165,
      marginTop: 50,
    }
});
