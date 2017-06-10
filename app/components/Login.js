
import React, {Component} from 'react'; 
var buffer = require('buffer'); 

import {
  View, 
  Text, 
  Image, 
  StyleSheet,
  TextInput, 
  TouchableHighlight,
  ActivityIndicator, 
  TouchableOpacity} from 'react-native'; 

// const Login = () => ({
	
// }); 

class Login extends Component{
  constructor(props){
    super(props)

      this.props.username; 
      this.props.password; 

      this.state = {
        showProgress : false
      }

  }
	render(){
      var errCtrl = <View /> 
      if(!this.state.success && this.state.badCredentials){
         errCtrl = <Text style={styles.errors}>this username or password is incorrect</Text>
      }

      if(!this.state.success &&  this.state.unknowError){
        errCtrl= <Text style={styles.errors}>we experienced unknown error</Text>
      }
		return (
      	<View style={styles.container}>
				<Image style={styles.logo} source={require('../../img/Octocat.png')}/> 
				<Text style={styles.heading}>Github Browser</Text> 
				<TextInput 
          style={styles.input} 
          placeholder="Github username" 
          onChangeText={(text) => this.setState({username: text})}/>
				<TextInput 
          onChangeText={(text)=> this.setState({password: text})}
          style={styles.input} 
          placeholder="Github username" 
          secureTextEntry />

          <TouchableOpacity
           onPress = {this.onLoggedInPressed.bind(this)}
           style={styles.button}><Text style={styles.buttonText}>Log In</Text></TouchableOpacity>
           
           {errCtrl}
           
           <ActivityIndicator style={styles.loader} animating={this.state.showProgress} /> 
			</View> 
		)

	}

   onLoggedInPressed() {
      this.setState({showProgress: true}); 
      var authService = require('../utility/authService'); 
      authService.login({
        username: this.state.username, 
        password: this.state.password
      }, (results) => {
        this.setState(Object.assign({showProgress: false},results)); 

        if(results.success && this.props.onLogin){
          return this.props.onLogin()
        }
      })

      // if(this.state.success && this.props.onLogin){
      //   return this.props.onLogin(); 
      // }
     }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  logo: {
  	width: 66,
  	height: 55
  }, 
  heading: {
  	fontSize: 30, 
  	marginTop: 10
  }, 
  input: {
  	height: 50, 
  	marginTop: 10, 
  	padding: 14, 
  	fontSize: 18, 
  	borderWidth: 1, 
  	borderColor: '#48bbec',
  	alignSelf: 'stretch',
  }, 
  button: {
  	height: 50, 
  	backgroundColor: '#48bbec', 
  	alignSelf: 'stretch',
  	justifyContent: 'center', 
  	marginTop:10, 
  }, 
  buttonText: {
  	fontSize: 22, 
  	color: '#fff', 
  	alignSelf: 'center'
  }, 
  loader: {
      marginTop: 10
  },
  errors: {
    color: 'red',
    paddingTop: 10
  }
});
export default Login; 
