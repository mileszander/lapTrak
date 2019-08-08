import React from 'react';
import CountDown from 'react-native-countdown-component';
import {View, Text} from 'react-native';



const Timer = ({set,timerOn, nextRep,resetTimer}) => {
    let a = 5
    return (
        <View style={styles.timerContainer}>

        <CountDown
            until={a}
            onFinish={() => {
                nextRep(1)
                if(2<3) {
                   a=4 
                }
            }}
            // onPress={() => alert('hello')}
            timeToShow={['M', 'S']}
            timeLabels={{}}
            size={175}
            running={timerOn}
        />
        {/* {resetTimer(5)} */}

        </View>
    )
}

const styles ={
    timerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
    },
    welcomeTitle: {
        fontFamily:  'Cochin',
        fontSize: 50,
        fontWeight: 'bold',
        color: '#4592C6'
    }
}

export default Timer;