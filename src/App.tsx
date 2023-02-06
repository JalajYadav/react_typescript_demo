import React from 'react';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    firstName: "Bruce",
    lastName: "Wayne",
  }

  const nameList = [
    {
      firstName: "Bruce",
    lastName: "Wayne",
    },
    {
      firstName: "Margot",
    lastName: "Robbie",
    },
    {
      firstName: "Michael",
    lastName: "Jordan",
    },
  ]

  return (
    <div className="App">
      <Greet name ="Jalaj1" messageCount={10} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList list={nameList}/>
    </div>
  );
}

export default App;
