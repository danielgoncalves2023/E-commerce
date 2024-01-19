import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import { CarouselProducts } from "../components/CarouselProducts";
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
    return(
        <Box>
            <Header>
                <CarouselProducts />
            </Header>
        </Box>
    )
}

export default Home;