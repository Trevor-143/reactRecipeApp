import Home from "./Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/cuisine" element={ <Cuisine /> } />    
            </Routes>
        </BrowserRouter>
    )
}

export default pages;