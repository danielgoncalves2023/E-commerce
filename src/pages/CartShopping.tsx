import { useContext, useEffect } from "react"
import { CartShop } from "../components/LargeWidth/CartShop"
import { AppContext } from "../components/AppContext"
import { useNavigate } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';
import { CartShopSmall } from "../components/SmallWidth/CartShop";

export const CartShopping = () => {
    const { isLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const responsiveMedia = useMediaQuery({
        query: '(max-device-width: 420px)'
    });

    // Redirecionar para a página de login se o usuário não estiver logado
    useEffect(() => {
        if (!isLoggedIn) {
            navigate(`/login`);
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            {
                responsiveMedia ?
                (
                    isLoggedIn && <CartShopSmall />
                ) :
                (
                    isLoggedIn && <CartShop />
                )
            }
        </>
    )
}
