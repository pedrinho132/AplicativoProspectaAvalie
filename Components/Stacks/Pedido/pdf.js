import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

export default class pdf extends React.Component {
    render() {
       
        return (
            <View style={styles.container}>
               
            </View>
        )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});