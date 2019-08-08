import React from 'react';
import CountDown from 'react-native-countdown-component';
import {View, Text} from 'react-native';



const Timer = ({set}) => {
    return (
        <View style={styles.timerContainer}>
  

        <CountDown
            until={set.interval}
            // onFinish={() => alert('finished')}
            // onPress={() => alert('hello')}
            timeToShow={['M', 'S']}
            timeLabels={{}}
            size={175}
        />
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