import React from 'react'
import { pokemonschema } from '../../Types/Pokemonscema'
import Pokecard from '../Pokecard/Pokecard'
import './Pokelist.css'

interface pokelistprops {
    searchedpokemon: pokemonschema[];
    onclick:(pokemonName: string)=> void;
}




const Pokelist = ({searchedpokemon, onclick}: pokelistprops)=>{

    return (
        <div className="pokelist">
           {
               searchedpokemon.map((pokemon)=>{
                   return (
                       pokemon.name && (
                        <Pokecard
                        onclick={onclick}

                        key={pokemon.id}
                        name={pokemon.name}
                        spriteurl={pokemon.sprites.normal}
                        />
                       )
                      
               )
               })

           }
          
        </div>
    )
}

export default Pokelist