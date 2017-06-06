import React, {Component} from 'react'; 
import {View, Text, Image, StyleSheet, TextInput, TouchableHighlight} from 'react-native'; 

// const Login = () => ({
	
// }); 

class Login extends Component{
	render(){
		return (
			<View style={styles.container}>
				<Image style={styles.logo} source={require('../../img/Octocat.png')}/> 
				<Text style={styles.heading}>Github Browser</Text> 
				<TextInput style={styles.input} placeholder="Github username" />
				<TextInput style={styles.input} placeholder="Github username" secureTextEntry />
				<TouchableHighlight style={styles.button}> 
					<Text style={styles.buttonText}>Log in</Text>
				</TouchableHighlight>
			</View> 
		);
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
  }
});
export default Login; 
