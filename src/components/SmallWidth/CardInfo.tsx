import {
    Button, ButtonGroup, Card, Image, Text, CardBody, CardFooter, Divider, Heading, Stack, Center, useToast
} from "@chakra-ui/react"
import { AppContext } from "../AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { formatReal } from "../../services/convertFormatValue";
import { addItemCart } from "../../services/cartShopping";

interface CardInfoProps {
    images: string;
    name: string;
    description: string;
    value: number;
}

export const CardInfoSmall = ({ images, name, description, value }: CardInfoProps) => {
    const { userLogged } = useContext(AppContext);
    const navigate = useNavigate()
    let toast = useToast()

    const handleBuyButtonClick = () => {
        if (userLogged) {
            setTimeout(() => {
                addItemCart(name, userLogged, navigate, toast);
                navigate('/cart');
            }, 500);
        } else {
            setTimeout(() => {
                navigate('/login');
            }, 500);

        }
    };

    const handleAddToCartButtonClick = () => {
        if (userLogged) {
            setTimeout(() => {
                addItemCart(name, userLogged, navigate, toast);
            }, 500)
        } else {
            setTimeout(() => {
                navigate('/login');
            }, 500)

        }
    };

    return (
        <>
            <Center>
                <Card maxW='260px' maxH='auto' m='0' boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                    <CardBody>
                        <Center>
                            {/* Imagem do produto */}
                            <Image
                                src={images}
                                alt={name}
                                borderRadius='sm'
                                boxSize='4rem'
                                objectFit='contain'
                            />
                        </Center>
                        <Stack mt='4' spacing='1'>
                            {/* Título do produto */}
                            <Heading fontSize='0.7rem' padding='2px' h='40px'>{name}</Heading>
                            {/* Descrição do produto */}
                            <Text fontSize='0.7rem' h='auto' overflow='hidden' noOfLines={6}>
                                {description}
                            </Text>
                            {/* Valor do produto */}
                            <Text color='blue.600' fontSize='0.8rem'>
                                {`${formatReal(value)}`}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider m='0' />
                    <Center>
                        <CardFooter>
                            <ButtonGroup spacing='1'>
                                <Center>
                                    <Button variant='solid' colorScheme='blue' w='50px' h='30px' fontSize='0.6rem'
                                        onClick={handleBuyButtonClick}
                                    >
                                        Comprar
                                    </Button>
                                    <Button variant='ghost' colorScheme='blue' w='50px' h='30px' fontSize='0.6rem'
                                        onClick={handleAddToCartButtonClick}
                                    >
                                        Adicionar
                                    </Button>
                                </Center>
                            </ButtonGroup>
                        </CardFooter>
                    </Center>
                </Card>
            </Center>
        </>
    )
}