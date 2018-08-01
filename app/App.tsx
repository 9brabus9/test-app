import React, { Component } from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import t from 'tcomb-form-native'; // 0.6.9
import Hihomie from './Hihomie';
import DataStore from './DataStore'


const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  //terms: t.Boolean
});


class App extends Component {
  public a = 5;
handleSubmit = () => {
  const value = this._form.getValue(); // use that ref to get the form value
  
  if(value!==null){
    DataStore.dataStore = [value.email, value.username, value.password];
    this.props.navigation.navigate('Details');
  }
  else alert("screw YOU");
}

render() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Form 
          ref={c => this._form = c} // assign a ref
          type={User} 
        />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    </View>
  );
}
}

const RootStack = createStackNavigator(
  {
    Home: App,
    Details: Hihomie,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
});