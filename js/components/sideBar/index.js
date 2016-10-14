
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, AsyncStorage }  from 'react-native';

import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';

import {Content, Text, List, ListItem} from 'native-base';

import styles from './style';
import myTheme from '../../themes/base-theme';

import Login from '../login/index';

var STORAGE_KEY = 'id_token';

var liveServer = 'http://202.168.75.94:2030'; //Setting address url of live server for reusability purposes


var apiURL = liveServer;
var prefix = '/tms-api-v1/';

class SideBar extends Component {
    //Navigation function
    navigateTo(route) {
        this.props.closeDrawer();
        this.props.replaceOrPushRoute(route);
    }
    //End navigation function

    //Remove authentication token from local storage
    async _userLogout() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      Alert.alert("Logged Out Successfully!")
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
  //End Remove authentication taken from local storage

  //POST logout and remove authentication token from local storage
  userLogout(){

  var path = apiURL + prefix +'Account/Logout';

    fetch(path,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      }
    })
    .then((response) => response.json())

    this._userLogout();

    this.navigateTo('login')
}
  //End POST logout and remove authentication token from local storage


    render(){
        return (
            <Content style={styles.sidebar} >
                <List foregroundColor={'white'}>
                    <ListItem style={styles.liitem} onPress={() => this.navigateTo('home')} >
                        <Text style={styles.text12}>H O M E</Text>
                    </ListItem>
                    <ListItem style={styles.liitem} onPress={() => this.navigateTo('bookingList')} >
                        <Text style={styles.text12}>B O O K I N G S    L I S T</Text>
                    </ListItem>
                    <ListItem style={styles.liitem} onPress={() => this.navigateTo('bookingHistories')} >
                        <Text style={styles.text12}>B O O K I N G S    H I S T O R I E S</Text>
                    </ListItem>
                   <ListItem style={styles.liitem} onPress={() => this.navigateTo('settings')} >
                        <Text style={styles.text12}>S E T T I N G S</Text>
                    </ListItem>
                    <ListItem style={styles.liitem} onPress={() => this.userLogout()} >
                        <Text style={styles.text12}>L O G O U T</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: ()=>dispatch(closeDrawer()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindAction)(SideBar);
