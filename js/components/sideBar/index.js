
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';

import {Content, Text, List, ListItem} from 'native-base';

import styles from './style';

class SideBar extends Component {

    navigateTo(route) {
        this.props.closeDrawer();
        this.props.replaceOrPushRoute(route);
    }

    render(){
        return (
            <Content style={styles.sidebar} >
                <List foregroundColor={'white'}>
                    <ListItem onPress={() => this.navigateTo('home')} >
                        <Text>Home</Text>
                    </ListItem>
                    <ListItem onPress={() => this.navigateTo('blankPage')} >
                        <Text>Bookings List</Text>
                    </ListItem>
                    <ListItem onPress={() => this.navigateTo('bookingStatus')} >
                        <Text>Bookings Status</Text>
                    </ListItem>
                    <ListItem onPress={() => this.navigateTo('bookingHistories')} >
                        <Text>Booking Histories</Text>
                    </ListItem>
                    <ListItem onPress={() => this.navigateTo('calendar')} >
                        <Text>Calendar</Text>
                    </ListItem>
                    <ListItem onPress={() => this.navigateTo('settings')} >
                        <Text>Settings</Text>
                    </ListItem>
                    <ListItem onPress={() => this.navigateTo('login')} >
                        <Text>Logout</Text>
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
