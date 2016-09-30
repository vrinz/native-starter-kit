
'use strict';

import React, { Component } from 'react';
import { DeviceEventEmitter, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';

import { replaceRoute } from '../../actions/route';

import { Container, Content, InputGroup, Input, Button, Icon, View } from 'native-base';

import myTheme from '../../themes/base-theme';
import styles from './styles';

//var t = require('tcomb-form-native');
//var Form = t.form.Form;

//var TMS_USERID_KEY = 'KerryTMS_UserId';

//var loginData = t.struct({email_text: t.String, texts: t.String});



const options = {};

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleHeight: Dimensions.get('window').height,
            scroll: false
        };
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    // _userLogin(){
    //   var value = this.refs.form.getValue();
    //   if(value){
    //     fetch("http://10.0.100.162/Metro/tms-api-v1/Account/Login", {
    //       method: "POST",
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         username: value.email_text,
    //         password: value.texts,
    //       })
    //     })
    //     .then((response)) => response.json())
    //     .then((responseData)) =>{
    //       Alert.alert("Login Success!"),
    //       this.replaceRoute("home"),
    //
    //     }
    //   }
    // }

    render() {
        return (
            <Container theme={myTheme}>
                <View style={styles.container}>
                    <Content>
                    <Image style={styles.imgstl} source={require('../../../images/syntronic-booking-logo.png')}></Image>
                            <View style={styles.bg}>
                                <InputGroup style={styles.input}>
                                    <Icon name={'ios-person'} style={{color: '#000'}}  />
                                    <Input placeholder="DRIVER'S ID"  />
                                </InputGroup>
                                <InputGroup style={styles.input}>
                                    <Icon name={'ios-lock-outline'} style={{color: '#000'}} />
                                    <Input
                                        placeholder='PASSWORD'
                                        secureTextEntry={true}
                                    />
                                </InputGroup>
                              </View>
                              <View>
                                <Button style={styles.btn} textStyle={{color: '#fff'}} onPress={() => this.replaceRoute('home')}>
                                    Login
                                </Button>
                            </View>
                    </Content>
                </View>
            </Container>
        )
    }
}

function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindActions)(Login);
