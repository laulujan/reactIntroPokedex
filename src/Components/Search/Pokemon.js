import React, {Component} from 'react';
import{
    Row, Col, Button
} from 'reactstrap';
import {Link} from 'react-router-dom';

class Pokemon extends Component{
    constructor(props){
        super(props)
        this.state={
            pokemon: null
        }
    }
    
    render(){
        const  {name, id, sprites} = this.props.pokemon;
        return <Row>
            <Col md="4" className="derecha">
                <img alt={name} src={sprites.front_default}>
                </img>
            </Col>
            <Col md="8" className="izquierda">
                <ul>
                    <li>Id: {id} </li>
                    <li>Name: {name} </li>
                    <Link to={{ pathname:'/profile/', pokemon: this.props.pokemon }}>
                        <Button color="info" >Profile</Button>
                    </Link>
                        <Button 
                        color="warning"
                        onClick={()=>{
                            this.props.catchPokemon({
                                name, id, sprites
                            })
                          }}>Catch!</Button>
                </ul>
            </Col>
        </Row>
    }
}

export default Pokemon