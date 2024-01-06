import React from 'react';
import './App.css';
import TaskManager from './components/TaskManager';

function App() {

  // let userNames: string[];
  // let tupleName: [string, number][]
  // let userAge: (string | number)[]

  // userAge = [1, "One"]

  // userNames = ["A", "B"]

  // tupleName = [["Sudo", 5], ["Mike", 12]]


  // //void returns undefined, never doesnt return anything.
  // let printName: (name: string) => never
  
  // //Alias
  // type Person = {
  //   name: string,
  //   age?: number
  // }

  // interface Details extends Person {
  //   profession: string,
  //   experience: number
  // }

  // let people: Person

  // people = {
  //   name: "Sudipta"
  // }

  // let candidate: Details
  // candidate = {
  //   name: "Sudipta",
  //   profession: "SDE 2",
  //   experience: 2.5
  // }


  return (
    <div className="App">
      <TaskManager />
    </div>
  );
}

export default App;
