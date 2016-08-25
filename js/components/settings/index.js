'use strict';

import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckboxField, Checkbox } from 'react-native-checkbox-field';

import { connect } from 'react-redux';
import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import { Container, Header, Title, Content, Text, Button, Icon, List, ListItem} from 'native-base';
import myTheme from '../../themes/base-theme';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center'
    },
    labelStyle: {
        flex: 1,
        fontSize: 16,
        color:'#000'
    },
    checkboxStyle: {
        width: 26,
        height: 26,
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 5
    },
    liitem: {
      flex:1,
      borderBottomWidth: 1,
      paddingTop: 0,
      paddingBottom: 0,
    },

    liitem2: {
      flex:1,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 10
    },
});


class CheckboxForm1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false,
            fieldLabel1: 'P u s h   N o t i f i c a t i o n',
            fieldLabel2: 'E m a i l   N o t i f i c a t i o n',
            fieldLabel3: 'C a l e n d a r   N o t i f i c a t i o n',
            fieldLabel4: 'T u r n   O N / O F F   N o t i f i c a t i o n s'

        };

        this.selectCheckbox1 = this.selectCheckbox1.bind(this);
      }

   selectCheckbox1() {
          this.setState({
              selected: !this.state.selected
          });
      }

      popRoute() {
          this.props.popRoute();
      }



    render() {
        const defaultColor = '#fff';

        // Only onSelect prop is required
        return (
          <Container theme={myTheme} style={{backgroundColor: '#fff'}}>
              <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                      <Icon name={'ios-arrow-back'} style={{color: '#fff'}} />
                  </Button>

                  <Title><Text style={{color: '#fff', fontSize: 18}}>Settings</Text></Title>

                <Button transparent onPress={this.props.openDrawer}>
                      <Icon name={'ios-menu'} style={{color: '#fff'}} />
                  </Button>
              </Header>
           <View>
           <ListItem style={styles.liitem}>
           <CheckboxField
               label={this.state.fieldLabel1}
               onSelect={this.selectCheckbox1}
               selected={this.state.selected}
               defaultColor={defaultColor}
               selectedColor="#247fd2"
               containerStyle={styles.containerStyle}
               labelStyle={styles.labelStyle}
               checkboxStyle={styles.checkboxStyle}
               labelSide={this.props.labelSide}>
           </CheckboxField>
           </ListItem>

           <ListItem style={styles.liitem}>
           <CheckboxField
               label={this.state.fieldLabel2}
               onSelect={this.selectCheckbox1}
               selected={this.state.selected}
               defaultColor={defaultColor}
               selectedColor="#247fd2"
               containerStyle={styles.containerStyle}
               labelStyle={styles.labelStyle}
               checkboxStyle={styles.checkboxStyle}
               labelSide={this.props.labelSide}>
           </CheckboxField>
           </ListItem>

           <ListItem style={styles.liitem}>
           <CheckboxField
               label={this.state.fieldLabel3}
               onSelect={this.selectCheckbox1}
               selected={this.state.selected}
               defaultColor={defaultColor}
               selectedColor="#247fd2"
               containerStyle={styles.containerStyle}
               labelStyle={styles.labelStyle}
               checkboxStyle={styles.checkboxStyle}
               labelSide={this.props.labelSide}>
           </CheckboxField>
           </ListItem>
           <Text> </Text><Text> </Text><Text> </Text><Text> </Text>
           <Text> </Text><Text> </Text><Text> </Text><Text> </Text>
           <Text> </Text><Text> </Text><Text> </Text><Text> </Text>
           <Text> </Text>

           <ListItem style={styles.liitem2}>
           <CheckboxField
               label={this.state.fieldLabel4}
               onSelect={this.selectCheckbox1}
               selected={this.state.selected}
               defaultColor={defaultColor}
               selectedColor="#247fd2"
               containerStyle={styles.containerStyle}
               labelStyle={styles.labelStyle}
               checkboxStyle={styles.checkboxStyle}
               labelSide={this.props.labelSide}>
           </CheckboxField>
           </ListItem>

           </View>

            </Container>
        )
    }
}

CheckboxForm1.propTypes = {
    labelSide: PropTypes.oneOf([
        'left',
        'right'
    ])
};

CheckboxForm1.defaultProps = {
    labelSide: 'right'
};

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

export default  connect(null, bindAction)(CheckboxForm1);
