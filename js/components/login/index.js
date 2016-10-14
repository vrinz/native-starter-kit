'use strict';

import React, { Component } from 'react';
import { DeviceEventEmitter, Dimensions, Image, Alert, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import { replaceRoute } from '../../actions/route';

import { Container, Content, InputGroup, Input, Button, Icon, View } from 'native-base';

import myTheme from '../../themes/base-theme';
import styles from './styles';


var STORAGE_KEY = 'id_token';
var liveServer = 'http://202.168.75.94:2030'; //Setting live server address for reusable purposes

var apiURL = liveServer;
var prefix = '/tms-api-v1/';
var z = "1";


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleHeight: Dimensions.get('window').height,
            scroll: false,
            username: "",  // Setting initial state for username
            password: "",  // Setting initial state for password
        }
    }

    //Navigate to the specified route
    replaceRoute(route) {
        this.props.replaceRoute(route);
    }
    //End navigate to the specified route

    //Save Access token whenever it changes value
    async onValueChange(item, selectedValue) {
         try {
              await AsyncStorage.setItem(item, selectedValue);
             } catch (error) {
                    console.log('AsyncStorage error: ' + error.message);
               }
    }
    //End save access token

    //POST login credentials for authentication
    userLogin(){
      var path = "";
      path = apiURL + prefix +'Account/Login';


      fetch(path,{
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      })

    .then(
      function status(response) {
        if(response.status !== 200){
          Alert.alert('Login Failed! Check Your Credentials');
        return response
        }

        else if(response.status == 200){
          z = z + "1";
          return response
        }

        //Examine the text in the response
          response.json().then(function(data) {
          this.onValueChange(STORAGE_KEY, data.id_token);
        // console.log(responseData);  //Uncomment this line for debugging purposes
        });
      })
      if(z == "11"){
        z = "1";
        this.replaceRoute('home');
        Alert.alert('Logged In Successfully!')
      }

    }
    //End POST Login authentication

    render() {
        return (
            <Container theme={myTheme}>
                <View style={styles.container}>
                    <Content>
                    <Image style={styles.imgstl} source={require('../../../images/syntronic-booking-logo.png')}></Image>
                            <View style={styles.bg}>
                                <InputGroup style={styles.input}>
                                    <Icon name={'ios-person'} style={{color: '#000'}}  />
                                    <Input placeholder="USER ID" value={this.state.username}
                                           onChangeText={username => this.setState({username})}
                                    />
                                </InputGroup>
                                <InputGroup style={styles.input}>
                                    <Icon name={'ios-lock-outline'} style={{color: '#000'}} />
                                    <Input placeholder='PASSWORD' secureTextEntry={true}
                                           value={this.state.password} onChangeText={password => this.setState({password})}
                                    />
                                </InputGroup>
                              </View>
                              <View>
                                <Button style={styles.btn} textStyle={{color: '#fff'}} onPress={()=> this.userLogin()}>
                                    Login
                                </Button>
                            </View>
                    </Content>
                </View>
            </Container>
        )
    }
}

// return conditions response status from server
function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}
// end return response status from server

function json(response) {
  return response.json()
}

function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindActions)(Login);
