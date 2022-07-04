import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Lista from "./pages/cadastros";

function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/cadastros" element={ <Lista /> } />
            </Routes>        
        </BrowserRouter>
    );
}

export default RoutesApp;

