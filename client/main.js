import React from 'react';
import { Meteor } from 'meteor/meteor';
import './main.html';
import  render  from 'react-dom';
import {Players, calculatePlayerPositions} from './../imports/Api/players';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/App';
//import Player from './../imports/ui/Player';

//Tracker.autorun(function(){
  //console.log('Players Lists', Players.find().fetch());
//});

/*setTimeout(function(){
  console.log('Players Lists', Players.find().fetch());
}, 1000);

const players=[{
  _id: '1',
name: 'Joy',
score: 20
},{_id: '2',
name: 'Ida',
score: 30
},{_id: '3',
name: 'Joyce',
score: 15}];*/
//import App from '../imports/ui/App.js';
Meteor.startup( () =>{
  Tracker.autorun(() =>{
    //console.log('Players Lists', Players.find().fetch());
    let players = Players.find({},{sort:{score:-1}}).fetch();
    let positionedPlayers=calculatePlayerPositions(players);
    let title= 'Score Keep';
    render.render(<App title={title} players={positionedPlayers}/>, document.getElementById('render-target'));
    });


  });
