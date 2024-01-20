import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import { CarouselProducts } from "../components/CarouselProducts";
import 'react-multi-carousel/lib/styles.css';
import { Layout } from "../components/Layout";

const Home = () => {
    return(
        <Layout>
            <Header>
                <CarouselProducts />
            </Header>
        </Layout>
    )
}

export default Home;