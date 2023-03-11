import { StyleSheet } from 'react-native';

export const gridStyle = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    imageCard: {
      borderRadius: 14,
      width: 100,
      height: 100,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    backgroundColor : {
      backgroundColor: '#15212A',
    },
    itemName: {
      fontSize: 16,
      color: '#CED6DC',
      fontWeight: '600',
      // textAlign:'center'
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
});