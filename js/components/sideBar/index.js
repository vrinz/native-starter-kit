
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';

import {Content, Text, List, ListItem} from 'native-base';

import styles from './style';
import myTheme from '../../themes/base-theme';


class SideBar extends Component {

    navigateTo(route) {
        this.props.closeDrawer();
        this.props.replaceOrPushRoute(route);
    }

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
                    <ListItem style={styles.liitem} onPress={() => this.navigateTo('calendar')} >
                        <Text style={styles.text12}>C A L E N D A R</Text>
                    </ListItem>
                   <ListItem style={styles.liitem} onPress={() => this.navigateTo('settings')} >
                        <Text style={styles.text12}>S E T T I N G S</Text>
                    </ListItem>
                    <ListItem style={styles.liitem} onPress={() => this.navigateTo('login')} >
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
