import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { CartShopping } from "./pages/CartShopping";

const MainRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/cart' element={<CartShopping />} />
        </Routes>
    )
}

export default MainRoutes;