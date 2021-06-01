import React from 'react'
import { pokemonschema } from '../../Types/Pokemonscema'
import './Pokesearchresult.css'

interface pokesearchresultprops {
    selectedpokemon: pokemonschema | undefined;
}

const Pokesearchresult =({selectedpokemon}: pokesearchresultprops)=>{

   const {name, id, height, weight, base_experience, sprites}= selectedpokemon || {}

    return (
        <div className="pokeresult-card">
            {
         selectedpokemon 
         ?(
             <div>
                 <img className="pokemon-animated-img" src={sprites?.animated || sprites?.normal} alt="Animated-img" />
                 <p>Name:{name}</p>
                 <p>id: {id}</p>
                 <p>height: {height}</p>
                 <p>weight: {weight}</p>
                 <p>base exp: {base_experience}</p>
             </div>
         )
         : (
                <h2>Welcome to Pokehub</h2>
         )

         }
        </div>
    )
}

export default  Pokesearchresult