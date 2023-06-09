import { useEffect, useState } from "react"
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

const Popular = () => {

    const [ popular, setPopular ] = useState([])

    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey={apiKey}&number=18`)
        const data = await api.json()
        // console.log(data)
        setPopular(data.recipes)
        
    } 

    return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    pagination: false,
                    drag: 'free',
                    gap: '2rem'
                }}>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide key={ recipe.id }>
                                <Card>
                                    <Link to={'/recipe/'+recipe.id}>
                                        <p> { recipe.title } </p>
                                        <img src={ recipe.image } alt={ recipe.title } />
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div `
    margin: 4rem 0rem;
`
const Card = styled.div `
    min-height: 10rem;
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 0.5rem;
        width: 100%;
        position: absolute;
        left: 0;
        object-fit: cover;
        height: 100%;
    }
    p {
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: #ffffff;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 0.7rem;
        padding: 0.5rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }    
`
const Gradient = styled.div `
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`


export default Popular;
