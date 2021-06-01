import React from 'react'
import { pokemonschema } from '../../Types/Pokemonscema'

import Pokelist from '../Pokelist/Pokelist'
import Pokesearchresult from '../Pokesearchresult/Pokesearchresult'
import Searchbox from '../Searchbox/Searchbox'
import './Pokehub.css'

interface Pokehubprops {
     searchedpokemon: pokemonschema[];
     selectedpokemon: pokemonschema | undefined;
     oninputchange:(inputvalue: string) => void;
    onclick:(pokemonName: string)=> void;
}

const Pokehub = ({ searchedpokemon, oninputchange, selectedpokemon, onclick }: Pokehubprops)=>{
 
    return (

        <div className="pokehub-container">
            <div className="pokelist-container">
               <Searchbox oninputchange={oninputchange} />
               <Pokelist searchedpokemon={searchedpokemon} onclick={onclick} />
            </div>

            <div className="pokesearchresult-container">
                <Pokesearchresult selectedpokemon={selectedpokemon} />
            </div>
          


        </div>
        
         

    )
}

export default Pokehub