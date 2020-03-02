import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {


  state = {
    data:[]
  }

  componentDidMount(){

    axios.get('https://randomuser.me/api/?results=50')
    .then( (response) => {
    // handle success
    console.log(response.data.results);
    this.setState({
      data: response.data.results
    })
    })
    .catch((error) => {
    // handle error
    console.log(error);
    })
    .finally(() =>{
    // always executed
    });

  }

  render(){
    return(
      <div className="App">
        <h1 style={{margin:"60px" ,color:"green"}}>Hi Gauri, Welcome to Accenture</h1>
        {this.state.data.map((item, key) => <UserInfo key={key} {...item}/>

        )}
      </div>
      )
  }

} 

function UserInfo({name,dob}){
  return(
    <p>{name.first} | {dob.date}</p>

    )

}

export default App;
