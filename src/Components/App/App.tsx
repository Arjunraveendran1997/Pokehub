import React from 'react'
import { pokemonData } from '../../Data/PokemonData'
import { pokemonschema, pokemonspritesSchema, unpatchedpokemonschema } from '../../Types/Pokemonscema'
import Footer from '../Footer/Footer'
import Pokehub from '../Pokehub/Pokehub'
import './App.css'

interface Appstate {

    searchfield: string;
    allpokemons: pokemonschema[];
    searchedpokemon:pokemonschema[];
    selectedpokemon: pokemonschema | undefined ;

}


class App extends React.Component<any,Appstate> {

    state = {
        searchfield:"",
        allpokemons:[],
        searchedpokemon:[],
        selectedpokemon:undefined,
        
    }
    patchpokemondata = (pokemons: unpatchedpokemonschema[])=>{
        const patchedpokemons = pokemons.map((pokemon)=>{
            let parsedsprites: pokemonspritesSchema = {
                normal: undefined,
                animated:undefined
            }
            try {
                parsedsprites =pokemon.sprites && JSON.parse(pokemon.sprites)
            }
            catch(e) {
                console.log("Exceptions while parsing ths sprites:",e)
            }

            const patchedpokemon: pokemonschema ={
                ...pokemon,
                sprites: parsedsprites
            }
            return patchedpokemon
        })
        return patchedpokemons
    }


componentDidMount(){
   const patchedpokemons: pokemonschema[] = this.patchpokemondata(
       pokemonData
   )
   

this.setState ({
    allpokemons:patchedpokemons,
    searchedpokemon:patchedpokemons
})

}

handleInputChange = (inputvalue: string)=>{
const {allpokemons}=this.state;
const searchedpokemon= allpokemons.filter(
    (pokemon: pokemonschema)=>{
        return (
            pokemon.name && 
            pokemon.name.toLowerCase()
            .includes(inputvalue.toLowerCase())
        )
    }
)

this.setState({
    searchfield:inputvalue,
    searchedpokemon,
})
}

handleclick = (pokemonName: string)=>{
    const {allpokemons} = this.state;
    
    const selectedpokemon = allpokemons.find(
        (pokemon: pokemonschema)=> pokemon.name=== pokemonName
    )
    this.setState({ selectedpokemon })
}

    render () {

        return (
                <div className="app">
                    <h1>POKEHUB</h1>
                    <Pokehub
                    searchedpokemon={this.state.searchedpokemon}
                    selectedpokemon={this.state.selectedpokemon}
                    onclick={this.handleclick}
                    oninputchange={this.handleInputChange}
                    />
                    <Footer />
                    </div>
        )
    }
}

export default App