import React from 'react'
import './Searchbox.css'

interface searchboxprops {
    oninputchange:(inputvalue: string) => void

}
const Searchbox = ({oninputchange}: searchboxprops)=>{


    return(
        <input onChange={(e)=>{
            oninputchange(e.target.value)

        }} type="search" className="search" placeholder="Search Pokemon"
        />
    )
}

export default Searchbox