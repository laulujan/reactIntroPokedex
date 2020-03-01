import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap';

import Search from './Components/Search';
import Pokedex from  './Components/Pokedex';
import Profile from './Components/Profile'
import Menu from './Components/Menu'


import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state= {
      pokemons:[]
    }
  }
  catchPokemon =(pokemon)=>{
    this.state.pokemons.push(pokemon)
    this.setState({
      pokemons: this.state.pokemons
    })
  }

  freePokemon = (id) => {
    console.log("wa");
    this.setState({
      pokemons: this.state.pokemons.filter(item => item.id !== id)
    })
  }

  render(){
    return <Router>
      <Container className="general">
        <Row>
          <Col md="12">
          <Menu></Menu>
          </Col>
        </Row>
        <Row>
        <Col md='2'></Col>
        <Col md='8'>
          <Switch>
            <Route path='/pokedex'>
              <Pokedex pokemons={this.state.pokemons} freePokemon={this.freePokemon}></Pokedex>
            </Route>
            <Route path='/profile' component={Profile}></Route>
            <Route path='/' >
              <Search catchPokemon={this.catchPokemon} ></Search>
            </Route>
          </Switch>
        </Col>
        <Col md='2'></Col>
      </Row>
      </Container>
    </Router>
  }
}

export default App;
