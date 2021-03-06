
'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff'
    },
    shadow: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: '#453F41'
    },
    bg: {
        flex: 1,
        marginTop:130,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30,
        bottom: 0
    },
    input: {
        marginBottom: 20
    },

   imgstl:{
     position: 'relative',
     width: 380,
     height: 85,
     alignSelf: 'center',
     marginTop: 160
   },

    btn: {
        marginTop: 0,
        alignSelf: 'center'
    }
});
