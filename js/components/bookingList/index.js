
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import {Image}  from 'react-native';

import { Container, Header, Title, Content, Text, Button, Icon, View} from 'native-base';

import myTheme from '../../themes/base-theme';
import styles from './styles';

class BookingList extends Component {

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={myTheme} style={{backgroundColor: '#fff'}}>
                <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name={'ios-arrow-back'} style={{color: '#fff'}} />
                    </Button>

                    <Title><Text style={{color: '#fff', fontSize: 18}}>Bookings List</Text></Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name={'ios-menu'} style={{color: '#fff'}} />
                    </Button>
                </Header>

                <Content>
                <View style={{flex: 1}}>
                   <View style={{height: 202, backgroundColor: 'powderblue'}}><Text> testing</Text></View>
                   <View style={{height: 202, backgroundColor: 'skyblue'}}></View>
                   <View style={{height: 202, backgroundColor: 'powderblue'}}></View>
                </View>
                </Content>

            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(BookingList);
