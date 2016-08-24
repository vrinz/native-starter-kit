
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';

import {Image}  from 'react-native';

import { Container, Header, Title, Content, Text, Button, Icon, View, ListItem, List} from 'native-base';

import myTheme from '../../themes/base-theme';

import styles from './style';


class AvailableBooking4 extends Component {

    popRoute() {
        this.props.popRoute();
    }

    navigateTo(route) {
        this.props.closeDrawer();
        this.props.replaceOrPushRoute(route);
    }


    render() {
        return (
            <Container theme={myTheme} style={{backgroundColor: '#fff'}}>
                <Header>
                    <Button transparent onPress={() => this.navigateTo('home')}>
                        <Icon name={'ios-arrow-back'} style={{color: '#fff'}} />
                    </Button>

                    <Title><Text style={{color: '#fff', fontSize: 18}}>Available Bookings</Text></Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name={'ios-menu'} style={{color: '#fff'}} />
                    </Button>
                </Header>

                <Content>
                <ListItem style={styles.liitem1} onPress={() => this.navigateTo('availableBooking4')} >
                      <Image style={styles.imgstl1} source={require('../../../images/av-4a.png')}></Image>
                </ListItem>
                   <Text> </Text>
                   <Text> </Text>

                  <Button style={{alignSelf:'center'}} textStyle={{color: '#fff'}} onPress={() => this.navigateTo('home')}>
                      Accept
                  </Button>

                </Content>

            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute()),
        closeDrawer: ()=>dispatch(closeDrawer()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindAction)(AvailableBooking4);
