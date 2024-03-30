import 'react-multi-carousel/lib/styles.css';
import { useMediaQuery } from 'react-responsive';
import { CarouselProducts } from "../components/LargeWidth/CarouselProducts";
import { CarouselProductsSmall } from "../components/SmallWidth/CarouselProducts";

const Home = () => {
    const responsiveMode = useMediaQuery({
        query: '(max-device-width: 420px)'
    });

    return (
        <>
            {
                responsiveMode ?
                    (
                        <CarouselProductsSmall />
                    ) :
                    (
                        <CarouselProducts />
                    )
            }
        </>
    )
}

export default Home;