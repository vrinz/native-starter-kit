
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash/core';
import { Drawer } from 'native-base';
import { BackAndroid, Platform, StatusBar } from 'react-native';
import { closeDrawer } from './actions/drawer';
import { popRoute } from './actions/route';
import Navigator from 'Navigator';

import Login from './components/login/';
import Home from './components/home/';
import AvailableBooking1 from './components/availableBooking1/';
import AvailableBooking2 from './components/availableBooking2/';
import AvailableBooking3 from './components/availableBooking3/';
import AvailableBooking4 from './components/availableBooking4/';
import BookingList from './components/bookingList/';
import BookingList1 from './components/bookingList1/';
import BookingList2 from './components/bookingList2/';
import BookingList3 from './components/bookingList3/';
import BookingList4 from './components/bookingList4/';
import App from './components/calendar/';
import BookingHistories from './components/bookingHistories/';
import BookingStatus from './components/bookingStatus/';
import SplashPage from './components/splashscreen/';
import SideBar from './components/sideBar';
import Settings from './components/settings';
import Logout from './components/logout';
import { statusBarColor } from "./themes/base-theme";

Navigator.prototype.replaceWithAnimation = function (route) {
    const activeLength = this.state.presentedIndex + 1;
    const activeStack = this.state.routeStack.slice(0, activeLength);
    const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
    const nextStack = activeStack.concat([route]);
    const destIndex = nextStack.length - 1;
    const nextSceneConfig = this.props.configureScene(route, nextStack);
    const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);

    const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
    this._emitWillFocus(nextStack[destIndex]);
    this.setState({
        routeStack: nextStack,
        sceneConfigStack: nextAnimationConfigStack,
    }, () => {
        this._enableScene(destIndex);
        this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
            this.immediatelyResetRouteStack(replacedStack);
        });
    });
};

export var globalNav = {};

const searchResultRegexp = /^search\/(.*)$/;

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        var currentState = state;

        if(currentState){
            while (currentState.children){
                currentState = currentState.children[currentState.index]
            }
        }
        return defaultReducer(state, action);
    }
};

const drawerStyle  = { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3};

class AppNavigator extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        globalNav.navigator = this._navigator;

        this.props.store.subscribe(() => {
            if(this.props.store.getState().drawer.drawerState == 'opened')
                this.openDrawer();

            if(this.props.store.getState().drawer.drawerState == 'closed')
                this._drawer.close();
        });

        BackAndroid.addEventListener('hardwareBackPress', () => {
            var routes = this._navigator.getCurrentRoutes();

            if(routes[routes.length - 1].id == 'home' || routes[routes.length - 1].id == 'login') {
                return false;
            }
            else {
                this.popRoute();
                return true;
            }
        });
    }

    popRoute() {
        this.props.popRoute();
    }

    openDrawer() {
        this._drawer.open();
    }

    closeDrawer() {
        if(this.props.store.getState().drawer.drawerState == 'opened') {
            this._drawer.close();
            this.props.closeDrawer();
        }
    }

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={<SideBar navigator={this._navigator} />}
                tapToClose={true}
                acceptPan={false}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}>
                <StatusBar
                    backgroundColor={statusBarColor}
                    barStyle="light-content"
                />
                <Navigator
                    ref={(ref) => this._navigator = ref}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.FloatFromRight;
                    }}
                    initialRoute={{id: (Platform.OS === "android") ? 'splashscreen' : 'login', statusBarHidden: true}}
                    renderScene={this.renderScene}
                  />
            </Drawer>
        );
    }

    renderScene(route, navigator) {
        switch (route.id) {
            case 'splashscreen':
                return <SplashPage navigator={navigator} />;
            case 'login':
                return <Login navigator={navigator} />;
            case 'home':
                return <Home navigator={navigator} />;
            case 'availableBooking1':
                return <AvailableBooking1 navigator={navigator} />;
            case 'availableBooking2':
                return <AvailableBooking2 navigator={navigator} />;
            case 'availableBooking3':
                return <AvailableBooking3 navigator={navigator} />;
            case 'availableBooking4':
                return <AvailableBooking4 navigator={navigator} />;
            case 'bookingList':
                return <BookingList navigator={navigator} />;
            case 'bookingList1':
                return <BookingList1 navigator={navigator} />;
            case 'bookingList2':
                return <BookingList2 navigator={navigator} />;
            case 'bookingList3':
                return <BookingList3 navigator={navigator} />;
            case 'bookingList4':
                return <BookingList4 navigator={navigator} />;
            case 'bookingStatus':
                return <BookingStatus navigator={navigator} />;
            case 'calendar':
                return <App navigator={navigator} />;
            case 'bookingHistories':
                return <BookingHistories navigator={navigator} />;
            case 'settings':
                return <Settings navigator={navigator} />;
            case 'logout':
                return <Logout navigator={navigator} />;
            default :
                return <Login navigator={navigator}  />;
        }
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

const mapStateToProps = (state) => {
    return {
        drawerState: state.drawer.drawerState
    }
}

export default connect(mapStateToProps, bindAction) (AppNavigator);
