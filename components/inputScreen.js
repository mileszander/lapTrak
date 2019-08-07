import React from 'react';
import {View, Text, Image} from 'react-native';
import { Button } from 'react-native-elements';

import InputFields from './inputFields'

const InputScreen = (props) => {
    return (
        //parent Container
        <View style={styles.inputContainer}>
            {/* TITLE */}
            <View style={{flex:.5, justifyContent: 'center', borderWidth: 0.5,borderColor: '#d6d7da' }}>
                <Text style={styles.inputTitle}>LapTrak</Text>
            </View>
            {/* LIST OF WORKOUTS  */}
            <View style={{flex:1.5,  borderWidth: 0.5,borderColor: '#d6d7da'}}>
                    <Text> LIST OF INPUTTED </Text>
            </View>
            <View style={{flex:1, borderWidth: 0.5, borderColor: '#d6d7da'}}>
                    <InputFields />
            </View>
            {/* aDD SET */}
            <View style={{flex:.50, justifyContent: 'center',}}>
                <Button
                    title="Submit Set"
                    // type="clear"
                    type="outline"
                    onPress={()=>{
                        props.nextPage()
                    }}
                />
            </View>
            <View style={{flex:.5, justifyContent: 'center'}}>
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
    inputContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#DCEEFA',
        flex:1,
        // justifyContent: 'center'
    },
    inputTitle: {
        fontFamily:  'Cochin',
        fontSize: 50,
        fontWeight: 'bold',
        color: '#4592C6'

    }
}