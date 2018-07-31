import React, { Component } from 'react';
import { Button, View, Text, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import t from 'tcomb-form-native'; // 0.6.9
import Hihomie from './Hihomie';


const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  //terms: t.Boolean
});


class App extends Component {
handleSubmit = () => {
  const value = this._form.getValue(); // use that ref to get the form value
  
  if(value!==null){
    this.props.navigation.navigate('Details');
  }
  else alert("screw YOU");
}
render() {
  return (
    <View style={styles.container}>
        <Form 
        ref={c => this._form = c} // assign a ref
        type={User} 
      />
      <Button
        title="Sign Up!"
        onPress={this.handleSubmit}
      />
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
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});