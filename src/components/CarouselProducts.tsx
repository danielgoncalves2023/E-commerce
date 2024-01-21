import { Box, Center } from "@chakra-ui/react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CardInfo } from "./CardInfo";
import { electronics, fashion, health, products } from "../products/products";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
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
    return (
        <Center margin='0 25px'>
            <Box w='100%' margin='10px auto' bg='white' borderRadius='10px' boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;'>
                <Carousel
                    className="custom-carousel"
                    // centerMode={true}
                    focusOnSelect={true}
                    swipeable={false}
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
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-30-px"
                >
                    <div>
                        <CardInfo
                            images={electronics[0].images}
                            name={electronics[0].name}
                            description={electronics[0].description}
                            value={electronics[0].value}
                        />
                    </div>
                    <div>
                        <CardInfo
                            images={health[0].images}
                            name={health[0].name}
                            description={health[0].description}
                            value={health[0].value}
                        />
                    </div>
                    <div>
                        <CardInfo
                            images={electronics[1].images}
                            name={electronics[1].name}
                            description={electronics[1].description}
                            value={electronics[1].value}
                        />
                    </div>
                    <div>
                        <CardInfo
                            images={electronics[2].images}
                            name={electronics[2].name}
                            description={electronics[2].description}
                            value={electronics[2].value}
                        />
                    </div>
                    <div>
                        <CardInfo
                            images={fashion[2].images}
                            name={fashion[2].name}
                            description={fashion[2].description}
                            value={fashion[2].value}
                        />
                    </div>
                    <div>
                        <CardInfo
                            images={fashion[0].images}
                            name={fashion[0].name}
                            description={fashion[0].description}
                            value={fashion[0].value}
                        />
                    </div>
                </Carousel>
            </Box>
        </Center>
    )
}
