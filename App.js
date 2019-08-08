import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import components
import Welcome from './components/welcome'
import InputScreen from './components/inputScreen'
import TimerPage from './components/timerPage'

export default class App extends Component {
  constructor() {
    super () 
    this.state = {
        page: 0,
        count:0,
        //array of object for workouts [ {stroke: free, distance: 100, amount: 10}]
        workOuts: [
        //   {
        //   "count": 10,
        //   "distance": 100,
        //   "interval": 90,
        //   "stroke": "Free",
        //   "type": "swim",
        // },
        // {
        //   "count": 10,
        //   "distance": 100,
        //   "interval": 100,
        //   "stroke": "Back",
        //   "type": "swim",
        // },
      ],
        // this one is maybe, I'm thinking we will need this one just because if we map through the list 
        //we will have a lot of extra stuff going on, including a timeout. 
        currentSet: 0
    }
    this.nextPage=this.nextPage.bind(this)
    this.submitSet=this.submitSet.bind(this)
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
          <TimerPage workOuts={this.state.workOuts} setNum={this.state.count}/>
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
