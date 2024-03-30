import { Box, Center } from "@chakra-ui/react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { getRandomsProducts } from "../../services/getRandomsProducts";
import { CardInfoSmall } from "./CardInfo";

interface CardInfoProps {
    images: string;
    name: string;
    description: string;
    value: number;
}

const responsive = {
    mobile: {
        breakpoint: { max: 420, min: 0 },
        items: 3,
    }
};

export const CarouselProductsSmall = () => {
    const productsToShow = getRandomsProducts(6);

    return (
        <Center margin='0 10px'>
            <Box w='100%' h='auto' margin='10px auto' bg='white' borderRadius='10px' boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px;'>
                <Carousel
                    className="custom-carousel"
                    centerMode={false}
                    focusOnSelect={false}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="transform 0.5s ease-in-out"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-30-px"
                >
                    {productsToShow.map((product: CardInfoProps, index: number) => (
                        <div key={index}>
                            <CardInfoSmall
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
