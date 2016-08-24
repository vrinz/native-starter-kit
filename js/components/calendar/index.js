import { connect } from 'react-redux';
import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import myTheme from '../../themes/base-theme';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Calendar from 'react-native-calendar';
import moment from 'moment';

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format(),
    };
  }

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

              <Title><Text style={{color: '#fff', fontSize: 18}}>Calendar</Text></Title>

            <Button transparent onPress={this.props.openDrawer}>
                  <Icon name={'ios-menu'} style={{color: '#fff'}} />
              </Button>
          </Header>

      <View style={styles.container}>
        <Calendar
          ref="calendar"
          eventDates={['2016-07-03', '2016-07-05', '2016-07-28', '2016-07-30']}
          scrollEnabled
          showControls
          dayHeadings={customDayHeadings}
          monthNames={customMonthNames}
          titleFormat={'MMMM YYYY'}
          prevButtonText={'Prev'}
          nextButtonText={'Next'}
          onDateSelect={(date) => this.setState({ selectedDate: date })}
          onTouchPrev={() => console.log('Back TOUCH')}     // eslint-disable-line no-console
          onTouchNext={() => console.log('Forward TOUCH')}  // eslint-disable-line no-console
          onSwipePrev={() => console.log('Back SWIPE')}     // eslint-disable-line no-console
          onSwipeNext={() => console.log('Forward SWIPE')}  // eslint-disable-line no-console
        />
        <Text style={{textAlign:'center'}}>Selected Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text>
      </View>
    </Container>
    );

  }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}
export default connect(null, bindAction)(App);
