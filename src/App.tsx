import React from 'react';
import { Button } from './components/Button';
import { Contanier } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
      <Status status="success"/>
      <Heading>PlacehOlders Text</Heading>
      <Oscar>
        <Heading>Chiku Yadav Ki Jay!!!</Heading>
      </Oscar>
      <Greet name ="Jalaj1" isLoggedIn={true}/>

      <Button handleClick={(event,otherData)=>console.log("Button Clicked",otherData)}/>
      <Input handleChange={(event)=>console.log(event)} value={"someValue"}/>

      <Contanier styles={{border:"1px solid blue",marginTop:"20px"}}/>
    </div>
  );
}

export default App;
