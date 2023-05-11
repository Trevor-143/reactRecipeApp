import Pages from "./pages/pages"
import Category from "./components/Category"
import { BrowserRouter, Link } from "react-router-dom";
import Search from './components/Search'
import styled from "styled-components"
import { GiKnifeFork } from "react-icons/gi"

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>Enjoy</Logo>
        </Nav>
          <Search />
          <Category />
          <Pages />
        </BrowserRouter>
        <Footer>
          <h4>&copy; 2023</h4>
          <p>SpoonacularAPI</p>
        </Footer>
      </div>
    </>
  )
}

const Logo = styled(Link) `
  text-decoration: none;
  font-size: 1rem;
  font-weight: 700;
  color: #000;
  margin-left: 1rem;

`
const Nav = styled.div `
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`

const Footer = styled.footer `
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #aaaaaa;
`

export default App
