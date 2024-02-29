import { useContext, useEffect } from "react"
import { CartShop } from "../components/CartShop"
import { AppContext } from "../components/AppContext"
import { useNavigate } from "react-router-dom"

export const CartShopping = () => {
    const { isLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    // Redirecionar para a página de login se o usuário não estiver logado
    useEffect(() => {
        if (!isLoggedIn) {
            navigate(`/login`);
        }
    }, [isLoggedIn]);

    return (
        <>
            {
            isLoggedIn && <CartShop />
            }
        </>
    )
}
