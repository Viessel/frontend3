import React, { Component } from 'react'
import {pokeContainer, pokeList, pokeOption} from "../styles/styles"
import "nes.css/css/nes.min.css";
export default class Pokedex extends Component {

    render() {
	console.log(this.props)
        const {updateParent} = this.props
        return (
                <div className="nes-container is-dark with-title is-centered">
		  <h3 className="title">POKEDEX</h3>
                    {this.props.pokemons.map(pokemon => (
                    <p key={pokemon.id} onClick={() => updateParent({pokemon: [pokemon.name, pokemon.id, pokemon.type]})} className="nes-btn is-warning">{pokemon.name}</p>
                    ))}
                </div>
        )
    }
}


