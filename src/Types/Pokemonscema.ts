export interface unpatchedpokemonschema {
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;
    is_default?: string;
    name?: string;
    sprites?: string;
}

export interface pokemonspritesSchema {
    normal?:string;
    animated?:string;
}

export interface pokemonschema {
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;
    is_default?: string;
    name?: string;
    sprites: pokemonspritesSchema;
}