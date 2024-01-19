import { Box, Center } from "@chakra-ui/react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CardInfo } from "./CardInfo";
import { products } from "../products/products";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const CarouselProducts = () => {
    return (
        <Center margin='0 25px'>
            <Box w='100%' margin='30px auto'>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div>
                        <CardInfo
                        images={products.electronics.mobile.images}
                        name={products.electronics.mobile.name}
                        description={products.electronics.mobile.description}
                        value={products.electronics.mobile.value}
                        />
                    </div>
                    <div>
                        <CardInfo
                        images={products.electronics.television.images}
                        name={products.electronics.television.name}
                        description={products.electronics.television.description}
                        value={products.electronics.television.value}
                        />
                    </div>
                    <div>
                        <CardInfo
                        images={products.electronics.sound_box.images}
                        name={products.electronics.sound_box.name}
                        description={products.electronics.sound_box.description}
                        value={products.electronics.sound_box.value}
                        />
                    </div>
                    <div>
                        <CardInfo
                        images={products.electronics.notebook.images}
                        name={products.electronics.notebook.name}
                        description={products.electronics.notebook.description}
                        value={products.electronics.notebook.value}
                        />
                    </div>
                </Carousel>;
            </Box>
        </Center>
    )
}
