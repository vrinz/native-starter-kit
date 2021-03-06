
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Login from '../components/login';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';
import { replaceOrPushRoute } from '../../actions/route';
import { closeDrawer } from '../../actions/drawer';

import { Container, Header, Title, Content, View, Text, Button, Icon, List, ListItem } from 'native-base';
import {Image, Alert, AsyncStorage}  from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';

import myTheme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

  async _userLogout() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    Alert.alert("Logged Out Successfully!")
  } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
  }
}

replaceRoute(route) {
    this.props.replaceRoute(route);
}

    userLogout(){
      fetch("http://10.0.100.162/Metro/tms-api-v1/Account/Logout",{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        }
      })
      .then(this._userLogout());
      this.replaceRoute('login')
    }

    navigateTo(route) {
        this.props.closeDrawer();
        this.props.replaceOrPushRoute(route);
    }

    render() {
        return (
            <Container theme={myTheme}style={{backgroundColor: '#fff'}}>
                <Header>
                    <Button transparent onPress={() => this.userLogout()}>
                        <Icon name={'ios-person'} style={{color: '#fff'}} />
                    </Button>

                    <Title><Text style={styles.title}>Available Bookings</Text></Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name={'ios-menu'} style={{color: '#fff'}}/>
                    </Button>
                </Header>

                <Content>
                <ListItem style={styles.liitem1} onPress={() => this.navigateTo('availableBooking1')} >
                      <Image style={styles.imgstl1} source={require('../../../images/av-1.png')}></Image>
                </ListItem>
                <ListItem style={styles.liitem2} onPress={() => this.navigateTo('availableBooking2')} >
                      <Image style={styles.imgstl2} source={require('../../../images/av-2.png')}></Image>
                </ListItem>
                <ListItem style={styles.liitem1} onPress={() => this.navigateTo('availableBooking3')} >
                      <Image style={styles.imgstl3} source={require('../../../images/av-3.png')}></Image>
                </ListItem>
                <ListItem style={styles.liitem2} onPress={() => this.navigateTo('availableBooking4')} >
                      <Image style={styles.imgstl4} source={require('../../../images/av-4.png')}></Image>
                </ListItem>

                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        closeDrawer: ()=>dispatch(closeDrawer()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindAction)(Home);
