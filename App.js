import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';

//import components
import Welcome from './components/welcome'
import InputScreen from './components/inputScreen'
import TimerPage from './components/timerPage'

export default class App extends Component {
  constructor() {
    super () 
    this.state = {
        page: 2,
        timeOn: false,
        count:1,
        prevCount:1,
        currentSet: 0,
        //array of object for workouts [ {stroke: free, distance: 100, amount: 10}]
        workOuts: [
          {
          "count": 10,
          "distance": 100,
          "interval": 5,
          "stroke": "Free",
          "type": "swim",
        },
        {
          "count": 10,
          "distance": 100,
          "interval": 100,
          "stroke": "Back",
          "type": "swim",
        },
      ],
        // this one is maybe, I'm thinking we will need this one just because if we map through the list 
        //we will have a lot of extra stuff going on, including a timeout. 
    }
    this.nextPage=this.nextPage.bind(this)
    this.submitSet=this.submitSet.bind(this)
    this.changeTimer=this.changeTimer.bind(this)
    this.nextRep=this.nextRep.bind(this)
    this.nextSet=this.nextSet.bind(this)
    this.resetTimer=this.resetTimer.bind(this)

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  //iterate through pages, will have button press
  nextPage(){
    let curPage = this.state.page 
    this.setState({page: (curPage += 1)})
  }

  submitSet(event) {
    sets = this.state.workOuts
    sets.push(event)
    this.setState({workOuts : sets})
  } 

  changeTimer(event) {
    this.setState({timeOn: event})
  }


//iteration counter
  nextRep (next) {
    let currentRep = this.state.count
    currentRep++
    this.setState({
      count: currentRep
      
    })
    this.resetTimer(5)
  }


  resetTimer (num) {
    if(this.state.count < 10) {
     return ( <CountDown
            until={5}
            onFinish={() => {
                this.nextRep()
            }}
            // onPress={() => alert('hello')}
            timeToShow={['M', 'S']}
            timeLabels={{}}
            size={175}
            running={this.state.timeOn}
          />)
  }
}

//set counter
  nextSet() {

  }
  

  //functions for accepting users

    render() {
      //welcome page
      if(this.state.page ===0) {
        return (
          <Welcome nextPage={this.nextPage}/>
      )} else if (this.state.page ===1) {
        //Input page
        return (
        <InputScreen nextPage={this.nextPage} submitSet={this.submitSet}
        workOuts={this.state.workOuts} />
      )} else if (this.state.page === 2) {
      //swim page          
        return (
          <TimerPage workOuts={this.state.workOuts} count={this.state.count}
          setCount={this.state.currentSet} changeTimer={this.changeTimer}
          timerOn={this.state.timeOn} nextRep={this.nextRep}
          resetTimer={this.resetTimer}/>
      )} else if (this.state.page === 3) {
      //next workout page
        return (
          <Text>Next Workout Page</Text>
      )} 
      else if (this.state.page === 4) {
        // Completion page
        return (
          <Text>Completion Page</Text>
      )} 
        
  }
}
