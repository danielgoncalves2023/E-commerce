import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { CartShopping } from "./pages/CartShopping";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const MainRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/cart' element={<CartShopping />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    )
}

export default MainRoutes;