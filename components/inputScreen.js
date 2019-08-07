import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import { Button } from 'react-native-elements';

import InputFields from './inputFields'

export default class InputScreen extends Component {
    constructor (props) {
        super (props)
        this.state = {
            stroke:'Free',
            distance: 100,
            count: 10, 
            interval: 90, 
            type: 'swim'
        }
        this.setWorkOut = this.setWorkOut.bind(this)
    }
    setWorkOut(event){
        this.setState(event)
    }

    renderSets() {
        let sets = this.props.workOuts
        return sets.map((set,i) => {
            return <Text key={i} style={styles.listItems}>
            {i+1}. {set.count} x {set.distance} {set.stroke} 
            {set.type} on the {set.interval}
            </Text>
        })
    }

    render () {
    return (
        //parent Container
        <View style={styles.inputContainer}>
            {/* TITLE */}
            <View style={{flex:.5, justifyContent: 'center', borderWidth: 0.5,borderColor: '#d6d7da' }}>
                <Text style={styles.inputTitle}>LapTrak</Text>
            </View>
            {/* LIST OF WORKOUTS  */}
            <View style={{flex:1.5,  width: 400, borderWidth: 0.5, borderColor: '#d6d7da'}}>
                {this.renderSets()}
            </View>
            <View style={{flex:1, borderWidth: 0.5, borderColor: '#d6d7da'}}>
                    <InputFields swim={this.state} setWorkOut={this.setWorkOut}/>
            </View>
            {/* aDD SET */}
            <View style={{flex:.50, justifyContent: 'center'}}>
                <Button
                    title="Submit Set"
                    // type="clear"
                    type="outline"
                    onPress={()=>{
                        set = this.state
                        this.props.submitSet(set)
                    }}
                />
            </View>
            <View style={{flex:.5, justifyContent: 'center'}}>
                <Button
                    title="Start Workout!"
                    type="clear"
                    type="outline"
                    onPress={()=>{
                        this.props.nextPage()
                    }}
                />
            </View>

        </View>
    )
    }
}


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
    },
    listItems: {
        fontFamily:  'Cochin',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#464950'
    }
}