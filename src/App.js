import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App(){
  return(
    <Personlist/>
  )
}

const Personlist=()=>{
 
  const People=[
    {
      id:1,
      name:'John',
      img: 'https://randomuser.me/api/portraits/thumb/men/40.jpg',
      job:"Developer"

    },
    {
      id:1,
      name:'Job',
      img:'https://randomuser.me/api/portraits/thumb/women/25.jpg',
      job:"Designer"

    },
    {
      id:1,
      name:'Bob',
      img:'https://randomuser.me/api/portraits/thumb/men/25.jpg',
      job:"Artist"

    },
  ]
  return(
    <section>
    <Person person={People[0]}/>
    <Person person={People[1]}>
      <h1>Habari yako master</h1>
      
    </Person>
    <Person person={People[2]}/>
    
  </section>
  )
  
}
const Person=(props)=>{
  const {name,img,job}=props.person
  
  
  const {children}=props
  return(
    <div className="person">
        <img src={img} alt="pic"/>
   <div>
        <h4>{name}</h4>
        <h3>{job}</h3>
        {children}
   </div>
    
    </div>
  )

}
export default App




