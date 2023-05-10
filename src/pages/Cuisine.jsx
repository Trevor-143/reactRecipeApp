import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { Link, useParams } from "react-router-dom"


function Cuisine() {

  const [ cuisine, setCuisine ] = useState([])
  let params = useParams()
  
  useEffect(() => {
    getCuisine(params.type)
    console.log(params.type)
    
  }, [params.type])

  const getCuisine = async (name) => {

    const store = localStorage.getItem('cuisine')

    if(store) {
      setCuisine(JSON.parse(store))
    } else {
      const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=948780b90e614431baba9b1f90a1674f&cuisine=${name}&number=18`)
      const recipes = await data.json()

      localStorage.setItem('cuisine', JSON.stringify(recipes.results))
      setCuisine(recipes.results)
    }

    
  }

  

  return (
    <Grid
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.8}}
    >
      {cuisine.map((meal) => {
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

const Grid = styled(motion.div )`
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

export default Cuisine