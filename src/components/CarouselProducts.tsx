import { Box, Center } from "@chakra-ui/react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CardInfo } from "./CardInfo";
import { getRandomsProducts } from "../services/getRandomsProducts";

interface CardInfoProps {
    images: string;
    name: string;
    description: string;
    value: number;
}

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1335 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 1335, min: 1024 },
        items: 4,
    },
    largeTablet: {
        breakpoint: { max: 1024, min: 800 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 800, min: 572 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 572, min: 0 },
        items: 1,
    }
};

export const CarouselProducts = () => {
    const productsToShow = getRandomsProducts(8);

    return (
        <Center margin='0 25px'>
            <Box w='100%' margin='10px auto' bg='white' borderRadius='10px' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px;'>
                <Carousel
                    className="custom-carousel"
                    centerMode={false}
                    focusOnSelect={false}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="transform 0.5s ease-in-out"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-30-px"
                >
                    {productsToShow.map((product: CardInfoProps, index: number) => (
                        <div key={index}>
                            <CardInfo
                                images={product.images}
                                name={product.name}
                                description={product.description}
                                value={product.value}
                            />
                        </div>
                    ))}
                </Carousel>
            </Box>
        </Center>
    )
}
