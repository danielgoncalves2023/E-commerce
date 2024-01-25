import { useContext, useEffect } from "react"
import { ItemCartShop } from "../components/ItemCartShop"
import { AppContext } from "../components/AppContext"
import { useNavigate } from "react-router-dom"

export const CartShopping = () => {
    const { isLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn) {
            // Redirecionar para a página de login se o usuário não estiver logado
            navigate(`/login`);
        }
    }, [isLoggedIn]);

    return (
        <>
            {isLoggedIn && <ItemCartShop />}
        </>
    )
}