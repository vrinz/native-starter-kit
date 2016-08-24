
'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    row: {
    	flex: 1,
    	alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#000',
        marginBottom: 15,
        alignItems: 'center'
    },

    title:{
      color: '#fff',
      fontSize: 18
    },

    imgstl1:{
      width:380,
      height: 190,
      alignSelf: 'center',
      marginTop: 0,
      marginBottom:0
    },

    imgstl2:{
      width:380,
      height: 185,
      alignSelf: 'center',
      marginTop: 0,
      marginBottom:0
    },

    imgstl3:{
      width:380,
      height: 200,
      alignSelf: 'center',
      marginTop: 0,
      marginBottom:0
    },

    imgstl4:{
      width:390,
      height: 200,
      alignSelf: 'center',
      marginTop: 0,
      marginBottom:0
    },

      liitem1: {
        borderBottomWidth: 1,
        marginTop:0,
        marginBottom: 0,
        backgroundColor: '#fff'
      },

      liitem2: {
        borderBottomWidth: 1,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor: '#EEEEEE'
      }
});
