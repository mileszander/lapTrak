import React from 'react';
import {View, Text, Image} from 'react-native';
import { Button } from 'react-native-elements';

const Welcome = (props) => {
    return (
        //parent Container
        <View style={styles.welcomeContainer}>
            {/* Image of Swimmer */}
            <View style={{flex:1, justifyContent: 'center' }}>
                <Text style={styles.welcomeTitle}>LapTrak</Text>
            </View>
            {/* Image  */}
            <View style={{flex:1}}>
                <Image
                    // style={{width: 50, height: 50}}
                    source={require('./swimmer.png')}
                    />
            </View>
            {/* button to proceed */}
            <View style={{flex:1, justifyContent: 'center'}}>
                <Button
                    title="Make Workout"
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

export default Welcome

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