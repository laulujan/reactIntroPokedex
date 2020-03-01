import React, {Component} from 'react';
import {Row, Col, Container} from 'reactstrap'

class Profile extends Component{
    render(){
        const {pokemon} = this.props.location;
        console.log(pokemon);
        return <Container className="profileContainer">
            <br/>
            <Row>
                <Col md="12"><h1>{pokemon.name}</h1></Col>
            </Row>
            <Row>
                <Col md="2"></Col>
                <Col md="4" className="derecha">
                    <img  alt={pokemon.name} src={pokemon.sprites.front_default}></img>
                </Col>
                <Col md="4" className="izquierda">
                    <img alt={pokemon.name} src={pokemon.sprites.back_default}></img>
                </Col>
                <Col md="2"></Col>
            </Row>
            <Row>
                <Col md="2"></Col>
                <Col md="4" className="derecha">
                    <img  src={pokemon.sprites.front_female}></img>
                </Col>
                <Col md="4" className="izquierda">
                    <img  src={pokemon.sprites.back_female}></img>
                </Col>
                <Col md="2"></Col>
            </Row>
            <Row>
                <Col md="12" >
                    <div className="abilities">
                      <h2>Abilities </h2> 
                    {
                        pokemon.abilities.map(x =>{
                            console.log(x);
                            return (<p key={x.ability.name}>{x.ability.name}</p>);
                        })
                    }    
                    </div>
                </Col>
            </Row>
        </Container>
    }

}

export default Profile;