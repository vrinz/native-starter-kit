
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';

import myTheme from '../../themes/base-theme';

class BookingHistories extends Component {

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

                    <Title><Text style={{color: '#fff'}}>Booking Histories</Text></Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name={'ios-menu'} style={{color: '#fff'}} />
                    </Button>
                </Header>

                <Content padder>
                    <Text>
                        Create Something Awesome . . .
                    </Text>
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

export default connect(null, bindAction)(BookingHistories);
