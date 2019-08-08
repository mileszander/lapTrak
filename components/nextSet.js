import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';




const Next = ({set,lastPage}) => {
    return (
        <View style={styles.nextContainer}>
            <View style={{flex:1, alignItems: 'center'}}>
                <Text style={styles.nextStyle}>
                    Start {set.count} x {set.distance} {set.stroke} {set.type} on the {set.interval}?</Text>
            </View>
            <View style={{flex:1, alignItems: 'center'}}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                        lastPage()
                    }}>
                    <Text style={styles.buttonText}> Let's Go!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = {
    nextContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    nextStyle: {
        fontFamily:  'Cochin',
        fontSize: 60,
        fontWeight: 'bold',
        paddingTop: 150
    },
    button: {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        width: 400,
        height: 45,
    },
    buttonText: {
        fontFamily:  'Cochin',
        fontSize: 40,
    }

    

}

export default Next;