import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


function Category() {
  return (
    <List> 
        <SLink to={"/cuisine/Italian"}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={"/cuisine/American"}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={"/cuisine/Thai"}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={"/cuisine/Japanese"}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </SLink>
    </List>
  )
}

const List = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
`
const SLink = styled(NavLink) `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 1rem;
    text-decoration: none;
    background-color: #000;
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.6);

    h4 {
        color: #fff;
        font-size: 0.8rem;
    }
    svg {
        color: #fff;
        font-size: 1.5rem;
    }
    &.active {
        background-color: #ff0000;

        svg {
            #fff
        }
        h4 {
            #fff
        }
    }
`

export default Category