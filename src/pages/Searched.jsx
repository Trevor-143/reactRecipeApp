import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"


function Searched() {

  const [ searched, setSearched ] = useState([])
  let params = useParams()
  
  useEffect(() => {
    getSearched(params.search)
    // console.log(params.type)
    
  }, [params.search])

  const getSearched = async (name) => {

    const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey={apiKey}&query=${name}&number=18`)
    const recipes = await data.json()
    setSearched(recipes.results)
    console.log(recipes)
    
  }

  

  return (
    <Grid>
      {searched.map((meal) => {
        return (
          <Card key={meal.id}>
            <Link to={'/recipe/'+meal.id}>
                <img src={meal.image} alt={meal.title} />
                <h4> {meal.title} </h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: 2rem;
`
const Card = styled.div `
  img {
    width: 100%;
    border-radius: 1rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    font-size: 0.7rem;
  }
`

export default Searched;
