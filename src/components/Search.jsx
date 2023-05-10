import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import styled from "styled-components"
import { useNavigate } from "react-router-dom";


const Search = () => {

    const [ input, setInput ] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Its working')
        navigate('/searched/'+input)
    }

    return (
        <FormStyle onSubmit = {submitHandler}>
            <div>
                <FaSearch></FaSearch>
                <input onChange = { (e) => setInput(e.target.value)}  type="text" value={input} />
            </div>
        </FormStyle>
    )
} 

const FormStyle = styled.form `
    margin: 0rem 10rem;

    div {
        width: 100%;
        position: relative;
        width: 100%;
    }

    input {
        border: none;
        background: #000;
        font-size: 0.7rem;
        color: #fff;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: #fff;
    }
`

export default Search;