import { useEffect } from "react"
import { CartShop } from "../components/LargeWidth/CartShop"
import { CartShopSmall } from "../components/SmallWidth/CartShop";
import { useNavigate } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';
import { useSelector } from "react-redux";

export const CartShopping = () => {
    const { userLogged } = useSelector((rootReducer: any) => rootReducer.userReducer)
    const navigate = useNavigate()

    const responsiveMedia = useMediaQuery({
        query: '(max-device-width: 420px)'
    });

    // Redirecionar para a página de login se o usuário não estiver logado
    useEffect(() => {
        if (userLogged === false) {
            navigate(`/login`);
        }
    }, [userLogged, navigate]);

    return (
        <>
            {
                responsiveMedia ? (
                    userLogged ? <CartShopSmall /> : null
                ) : (
                    userLogged ? <CartShop /> : null
                )
            }
        </>
    );
}
