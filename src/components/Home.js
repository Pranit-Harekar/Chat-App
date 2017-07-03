import React from 'react';

import{
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import{
  Actions,
}from 'react-native-router-flux'

class Home extends React.Component{
  state = {
    name: '',
  };
  render(){
    return (
      <View>
        <Text style={styles.title}>
          Enter your name:
        </Text>
        <TextInput
          style= {styles.nameInput}
          placeholder = 'Cesur Alemdaroglu'
          onChangeText={(text)=>{
            this.setState({
              name: text,
            });
          }}
          value = {this.state.name}
        />
      <TouchableOpacity onPress={() =>{
        Actions.chat({
          name: this.state.name
        });
        }}>
            <Text style={styles.buttonText}>
              Next
            </Text>
        </TouchableOpacity>
      </View>
  );
  }
}

var styles = StyleSheet.create({
  title:{
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  nameInput:{
    padding: 5,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
  },
  buttonText:{
    marginLeft: 20,
    fontSize: 20,
    color: 'skyblue',
    alignItems: 'center'
  }
});

export default Home;
