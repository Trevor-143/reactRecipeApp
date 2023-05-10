import { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"


const Recipe = () => {

    const [ recipe, setRecipe ] = useState([])
    const [ activeTab, setActiveTab ] = useState('Instructions')

    let params = useParams()

    useEffect(() => {
        getRecipe(params.id)
    }, [params.id])

    const getRecipe = async () => {
        const res = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey={apiKey}`)
        const data = await res.json()
        console.log(data)
    }



    return (
        <DetailedWraper
          animate={{opacity: 1}}
          initial={{opacity: 0}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}
          >
            <div>
                <h2> {recipe.title} </h2>
                <img scr={recipe.image} alt={recipe.title} />
            </div>
            <Info>
                <Button className = { activeTab === 'Instructions' ? 'active' : '' } onClick = {() => setActiveTab('Instructions') } >Instructions</Button>
                <Button className = { activeTab === 'Ingredients' ? 'active' : '' } onClick = {() => setActiveTab('Ingredients') } >Ingredients</Button>
                { activeTab === 'Instructions' && (
                    <div>
                        <p> dengerouslySetInnerHTML={{__html: recipe.summary}}</p>
                        <p> dengerouslySetInnerHTML={{__html: recipe.instructions}} </p>
                    </div>
                ) }
                { activeTab === 'Ingredients' && (
                    <ul>
                        {recipe.extendedIngredients.map((ingredient) => {
                            <li key={ingredient.id}> {ingredient.original} </li>
                        })}
                    </ul>
                ) }
            </Info>
        </DetailedWraper>
    )
}

const DetailedWraper = styled(motion.div) `
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    .active {
        background: #000;
        color: $fff;
    }
    h2 {
        margin-bottom: 2rem;
    }
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    ul {
        margin-top: 2rem;
    }
`

const Button = styled.button `
    padding: 1rem 2rem;
    color: #000;
    background: #fff;
    border: 2px solid #000;
    margin-right: 2rem;
    font-weight: 600;
`

const Info = styled.div `
    margin-left: 10rem;
`


export default Recipe;
