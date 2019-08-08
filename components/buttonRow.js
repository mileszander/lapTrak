import React from 'react';
import {View} from 'react-native';
import { Button } from 'react-native-elements';


const Buttons = ({workOuts}) => {
    return (
        <View style={styles.buttonContainer}>
            <View style={{flex:1, paddingLeft: 40, paddingRight: 40, paddingTop: 20 }}>
            <Button
                title="Start"
                type="clear"
                type="outline"
                onPress={()=>{
                    // props.nextPage()
                    console.log('pressed')
                
                }}
            />
            </View>
            <View style={{flex:1, paddingLeft: 40, paddingRight: 40, paddingTop: 20 }}>
            <Button
                title="Stop"
                type="clear"
                type="outline"
                onPress={()=>{
                    // props.nextPage()
                    console.log('pressed')

                }}
            />
            </View>
        </View>
    )
}

const styles ={
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
}

export default Buttons;