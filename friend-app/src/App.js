import React, { Component } from 'react';
import './App.css';
import Friend from './components/Friend'
import Button from './components/Button'


const amis = {
  friend1: {
      nom : 'Simon',
      age : 29
  },
  friend2: {
      nom : 'Elodie',
      age : 38
  },
  friend3: {
      nom : 'Adelina',
      age : 19
  },
  friend4: {
      nom : 'Neko',
      age : 3
  }
}



class App extends Component {
  state = {amis}

  handleClick = (num) => { const amis = { ... this.state.amis}
      amis.friend1.age += (num)
      this.setState({ amis })}

      handleChange = event => { const amis = { ... this.state.amis}
      const nom = event.target.value
      amis.friend1.nom = nom
      this.setState({ amis })}


  render () {
    const {titre} = this.props
    const {amis} = this.state
    return (
    <div className="App">
      <h1>{titre}</h1>
      <input value={amis.friend1.nom} onChange=
      {this.handleChange} type='text'></input>
      <Friend 
      nom={amis.friend1.nom}
      age={amis.friend1.age} />
      <Friend 
      nom={amis.friend2.nom}
      age={amis.friend2.age} />
      <Friend 
      nom={amis.friend3.nom}
      age={amis.friend3.age} />
      <Friend 
      nom={amis.friend4.nom}
      age={amis.friend4.age}>
        <strong>Je suis un chat.</strong>
        </Friend>
        <Button
                vieillir={()=>this.handleClick(10)} />
    </div>
  );
}
}

export default App;
