import {
    Button, ButtonGroup, Card, Image, Text, CardBody, CardFooter, Divider, Heading, Stack, Center, useToast
} from "@chakra-ui/react"
import { AppContext } from "./AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { formatReal } from "../services/convertFormatValue";
import { addItemCart } from "../services/cartShopping";

interface CardInfoProps {
    images: string;
    name: string;
    description: string;
    value: number;
}

export const CardInfo = ({ images, name, description, value }: CardInfoProps) => {
    const { userLogged, setUserLogged } = useContext(AppContext);
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
                <Card maxW='260px' maxH='auto' m='20px 0' boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                    <CardBody>
                        <Center>
                            {/* Imagem do produto */}
                            <Image
                                src={images}
                                alt={name}
                                borderRadius='sm'
                                boxSize='10rem'
                                objectFit='contain'
                            />
                        </Center>
                        <Stack mt='4' spacing='2'>
                            {/* Título do produto */}
                            <Heading fontSize='1rem' padding='5px' h='40px'>{name}</Heading>
                            {/* Descrição do produto */}
                            <Text maxH='140px' overflowY='scroll'>
                                {description}
                            </Text>
                            {/* Valor do produto */}
                            <Text color='blue.600' fontSize='xl'>
                                {`${formatReal(value)}`}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider m='0' />
                    <Center>
                        <CardFooter>
                            <ButtonGroup spacing='1'>
                                <Center>
                                    <Button variant='solid' colorScheme='blue' fontSize='0.8rem'
                                        onClick={handleBuyButtonClick}
                                    >
                                        Comprar
                                    </Button>
                                    <Button variant='ghost' colorScheme='blue' fontSize='0.8rem'
                                        onClick={handleAddToCartButtonClick}
                                    >
                                        Adicionar ao carrinho
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