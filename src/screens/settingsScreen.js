import {Text, SafeAreaView} from 'react-native';
import{Component} from 'react';
import {styles} from '../styles/defaultStyle';

class SettingsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  increment = () => {
    this.setState(prevState =>{
        return{
            count : prevState.count + 1
          }
      })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{
          textAlignVertical: "center",
          textAlign: "center",
          fontSize: 20,
          color: 'white'
          }}>Version 0.0.1</Text>
      </SafeAreaView>
    );
  } 
}

export default SettingsScreen;