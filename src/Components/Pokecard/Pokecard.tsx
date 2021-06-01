import React from 'react'
import './Pokecard.css'

interface pokecardprops {
    spriteurl?: string;
    name: string;
    onclick:(pokemonName: string)=> void;

}

const Pokecard = ({spriteurl, name,onclick}: pokecardprops)=>{

    return (
        <div onClick={()=>onclick(name)} className="pokecards">
            <img className="pokemon-img" src={spriteurl} alt="pokemon" />
            <p>{name}</p>

        </div>
    )
}

export default Pokecard