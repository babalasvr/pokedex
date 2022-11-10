import { Container, Grid } from '@mui/material'
import Card_pokedex from './Card_pokedex'
import NavBar from './NavBar'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {

    const [pokemons, setPokemons] = useState([])
  

  useEffect( () => {
    getPokemons()
  }, [])

  const getPokemons = () => {
    var endpoints = []
    for( var i = 1; i <= 200; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
    .then( res => {
      setPokemons(res)
    })
    .catch((err) => console.log(err))
  }

  const pokemonSearch = (name) => {
    var filteredPokemons = []
    if(name === '')
        {
        getPokemons()
        }

    for( var i in pokemons) {
        if( pokemons[i].data.name.includes(name)) {
            filteredPokemons.push(pokemons[i])
        }
    }  
    setPokemons(filteredPokemons)
  }

  return (
    <div>
        <NavBar pokemonSearch={pokemonSearch} />
        <Container maxWidth="xl">
            <Grid container>
                {pokemons.map( (pokemon, key) => {
                    return <Grid item xs={12} sm={4} md={3} lg={2} key={key}>
                    <Card_pokedex name={pokemon.data.name} 
                    img={pokemon.data.sprites.front_default}
                    types={pokemon.data.types}  />
                    </Grid>
                })}
            </Grid>
        </Container>
    </div>
  )
}
