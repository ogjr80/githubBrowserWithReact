

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ActivityIndicator,
  View
} from 'react-native';

//custom import areas
import Login from './app/components/Login'; 


//main class -- look at this code later and decide how to fix it
// export default class githubBrowser extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       isLoggedIn : false
//     }
//   }

//   render() {
//     if(this.state.isLoggedIn){
//       return (
//               <View style={styles.container}> 
//                 <Text style={styles.welcome}>Logged In</Text>
//               </View>
//           );
//     } else {
//       return (
//       <Login onLogin={this.onLogin}/> 
//     );
//     }
    
//   }
//   onLogin(){
//     this.setState({ isLoggedIn : true});
//   }
// }
var AuthService = require('./app/utility/authService'); 

var githubBrowser = React.createClass({

  componentDidMount: function(){
    AuthService.getAuthInfo((err, authInfo)=>{
      this.setState({
        checkingAuth: false,
        isLoggedIn: authInfo != null
      })
    });
  },
  render: function(){
    if(this.state.checkingAuth){
      return (
          <View style={styles.container}>
            <ActivityIndicator animating={true} size="large" style={styles.loader} /> 
          </View> 
        )
    }
      if(this.state.isLoggedIn){
        return (
                <View style={styles.container}>
                  <Text style={styles.welcome}>Logged In now!</Text>
                </View> 
          );
      } else {
        return (
        <Login onLogin={this.onLogin}/>
        );
      }
      
    },
    onLogin: function(){ 
      this.setState({isLoggedIn: true}); 
    },
    getInitialState: function(){
      return {
        isLoggedIn: false, 
        checkingAuth: true
      }
    }
});










//this is the style areas 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('githubBrowser', () => githubBrowser);
