
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';

import { Container, Header, Title, Content, View, Text, Button, Icon } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import myTheme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    render() {
        return (
            <Container theme={myTheme}style={{backgroundColor: '#fff'}}>
                <Header>
                    <Button transparent onPress={() => this.replaceRoute('login')}>
                        <Icon name={'ios-person'} style={{color: '#fff'}} />
                    </Button>

                    <Title><Text style={styles.title}>Name of Driver</Text></Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name={'ios-menu'} style={{color: '#fff'}}/>
                    </Button>
                </Header>

                <Content>
                  
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Home);
