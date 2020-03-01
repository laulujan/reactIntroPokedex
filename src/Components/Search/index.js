import React, {Component} from 'react';
import {
    Form, 
    FormGroup, 
    Label, 
    Input,
    Container,
    Row,
    Col,
    Button,
    Alert} 
from 'reactstrap';
import * as yup from 'yup';
import {getPokemon} from '../../Services/pokemonService';
import Pokemon from './Pokemon';

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:'',
            isNameValid: true,
            pokemon: null,
            pokemonExists: true,

        }
    }

    onChange=(e)=>{
        const name = e.target.value;
        this.setState({name})
    }
    onClick= async (e)=>{
        e.preventDefault()
        const {name: poke} = this.state;
        let schema = yup.object()
        .shape({
            pokemon: yup.string().min(3).required()
        })
        const isValid = await schema.isValid({pokemon: poke})
        this.setState({
            isNameValid: isValid,
            pokemonExists: true
        })
        if(!isValid) return

        let state = {}
        try{
            const {data} = await getPokemon(poke)
            state ={
                pokemonExists: true,
                pokemon: data
            };
        } catch (error){
            state={pokemonExists: false};
        }
        this.setState(state);
    }

    render(){
        return <Container>
            <Row>
                <Col md='12'>
                    <Form>
                        <FormGroup>
                            <Label for="pokemon">Search Pokemon: </Label>
                            <Input 
                            type="text" 
                            name="pokemon" 
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.onChange}
                            invalid={!this.state.isNameValid}
                            />
                            {!this.state.pokemonExists &&
                            <Alert color="danger">
                                Pokemon dont exist
                            </Alert>
                            }
                            <br/>
                            <Button 
                            color="success" 
                            size="lg" 
                            block 
                            onClick={this.onClick}
                            >Search
                            </Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
            <br/>
            {
                this.state.pokemon &&
                <Pokemon pokemon={this.state.pokemon}
                catchPokemon ={this.props.catchPokemon}>
                </Pokemon>
            }
            
        </Container>
    }

}

export default Search;