
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

class BookingList extends Component {

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
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name={'ios-arrow-back'} style={{color: '#fff'}} />
                    </Button>

                    <Title><Text style={{color: '#fff', fontSize: 18}}>Bookings List</Text></Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name={'ios-menu'} style={{color: '#fff'}} />
                    </Button>
                </Header>

                <Content>
              { /* <View style={{flex: 1}}>
                   <View style={{height: 202, backgroundColor: 'powderblue'}}>
                      <Text> testing</Text>
                      <Text> testing2</Text>
                      <Text> testing2</Text>
                      <Text> testing2</Text>
                      <Text> testing2</Text>
                   </View>
                   <View style={{height: 202, backgroundColor: 'skyblue'}}></View>
                   <View style={{height: 202, backgroundColor: 'powderblue'}}></View>
                   <View style={{height: 202, backgroundColor: 'skyblue'}}><Text> testing</Text></View>
                   <View style={{height: 202, backgroundColor: 'powderblue'}}></View>
                   <View style={{height: 202, backgroundColor: 'skyblue'}}><Text> testing</Text></View>
                </View> */}

                <ListItem style={styles.liitem1} onPress={() => this.navigateTo('bookingList1')} >
                      <Image style={styles.imgstl1} source={require('../../../images/booking-1.png')}></Image>
                </ListItem>
                <ListItem style={styles.liitem2} onPress={() => this.navigateTo('bookingList2')} >
                      <Image style={styles.imgstl2} source={require('../../../images/booking-2.png')}></Image>
                </ListItem>
                <ListItem style={styles.liitem1} onPress={() => this.navigateTo('bookingList3')} >
                      <Image style={styles.imgstl3} source={require('../../../images/booking-3.png')}></Image>
                </ListItem>
                <ListItem style={styles.liitem2} onPress={() => this.navigateTo('bookingList4')} >
                  <Image style={styles.imgstl4} source={require('../../../images/booking-4.png')}></Image>
                </ListItem>

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

export default connect(null, bindAction)(BookingList);
