import { useState, useEffect } from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { BiDish } from "react-icons/bi";


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
        setRecipe(data)
    }



    return (
        <DetailedWraper
          animate={{opacity: 1}}
          initial={{opacity: 0}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}
          >
            <div>
                <img src={recipe.image} alt={recipe.title} />
                <h2> {recipe.title} </h2>
                <p dangerouslySetInnerHTML = {{ __html: recipe.summary}} ></p>
            </div>
            <Info>
                <Button className = { activeTab === 'Instructions' ? 'active' : '' } onClick = {() => setActiveTab('Instructions') } >Instructions</Button>
                <Button className = { activeTab === 'Ingredients' ? 'active' : '' } onClick = {() => setActiveTab('Ingredients') } >Ingredients</Button>
                { activeTab === 'Instructions' && (
                    <div>
                        <p dangerouslySetInnerHTML = {{ __html: recipe.instructions}} ></p>
                    </div>
                ) }
                { activeTab === 'Ingredients' && (
                    <ul>
                        {recipe.extendedIngredients.map((ingredient) => {
                            return (
                                <li key={ingredient.id}>
                                    <BiDish />
                                    <h3>{ingredient.original}</h3>
                                </li>
                            )
                        })}
                    </ul>
                ) }
            </Info>
        </DetailedWraper>
    )
}

const DetailedWraper = styled(motion.div) `
    margin-top: 5rem;
    margin-bottom: 2rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

    img {
        width: 100%;
        border-radius: 0.5rem;
    }
    p {
        font-size: 13px;
        a {
            text-decoration: none;
            font-weight: 500;
            color: #ff0000;
        }
    }
    .active {
        background: #000;
        color: #fff;
    }
    h2 {
        margin-bottom: 1rem;
        font-size: 15px;
    }
    li {
        font-size: 0.8rem;
        list-style-type: none; 
        display: flex;
        align-items: center;
        margin-top: 0;

        svg{
            font-size: 22px;
            margin-right: 0.5rem;
            color: #ff0000;
        }

        h3 {
            margin-bottom: 0;
            font-size: 13px;
        }
    }
`

const Button = styled.button `
    padding: 0.5rem 1rem;
    color: #000;
    border-radius: 0.5rem;
    background: #fff;
    border: 2px solid #000;
    margin-right: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    cursor: pointer;
`

const Info = styled.div `
    margin: 1rem;
`


export default Recipe;
