import React, {Component} from 'react';
import {Row, Col, Container, Button} from 'reactstrap';



class Pokedex extends Component{

    render(){
        const {pokemons}  = this.props;

        return <Container className="pokedexContainer">
            {
                pokemons.map(p =>(
                    <Row>
                        <Col mid='4'className="derecha">
                            <img alt={p.name} src={p.sprites.front_default}></img>
                        </Col>
                        <Col mid='8' className="izquierda">
                            <ul>
                                <li>Id: {p.id}</li>
                                <li>Name: {p.name}</li>
                                <Button outline color="danger" onClick={()=>{
                                    this.props.freePokemon(p.id)
                                }}>Free</Button>
                            </ul>
                        </Col>
                    </Row>
                ))
            }
            
        </Container>
    }

}

export default Pokedex;