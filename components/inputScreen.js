import React from 'react';
import {View, Text, Image} from 'react-native';
import { Button } from 'react-native-elements';

const InputScreen = (props) => {
    return (
        //parent Container
        <View style={styles.welcomeContainer}>
            {/* TITLE */}
            <View style={{flex:1, justifyContent: 'center' }}>
                <Text style={styles.welcomeTitle}>LapTrak</Text>
            </View>
            {/* Image  */}
            <View style={{flex:2}}>
                    <Text> LIST OF INPUTTED </Text>
            </View>
            <View style={{flex:.5}}>
                    <Text> INPUT AREA </Text>
            </View>
            {/* aDD SET */}
            <View style={{flex:1, justifyContent: 'center'}}>
                <Button
                    title="Submit Set"
                    // type="clear"
                    type="outline"
                    onPress={()=>{
                        props.nextPage()
                    }}
                />
            </View>
            <View style={{flex:1, justifyContent: 'center'}}>
                <Button
                    title="Start Workout!"
                    type="clear"
                    type="outline"
                    onPress={()=>{
                        props.nextPage()
                    }}
                />
            </View>

        </View>
    )
}

export default InputScreen;

const styles ={
    welcomeContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#DCEEFA',
        flex:1,
        // justifyContent: 'center'
    },
    welcomeTitle: {
        fontFamily:  'Cochin',
        fontSize: 50,
        fontWeight: 'bold',
        color: '#4592C6'

    }
}