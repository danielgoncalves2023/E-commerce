import {
    Card, Image, CardBody, CardFooter, Stack, Heading, Text, Button, Box, ButtonGroup, Center, useToast
} from "@chakra-ui/react"
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { formatReal } from "../services/convertFormatValue";
import { useNavigate } from "react-router-dom";
import { addItemCart } from "../services/cartShopping";

interface CardInfoProps {
    images: string;
    name: string;
    description: string;
    value: number;
}

export const SearchProducts = ({ images, name, description, value }: CardInfoProps) => {
    const { userLogged, setUserLogged } = useContext(AppContext)
    const toast = useToast()
    const navigate = useNavigate()

    return (
        <>
            <Box m='0 20px'>
                <Card
                    boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px;'
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    padding='20px'
                >
                    <Image
                        objectFit='contain'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={images}
                        alt={name}
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='md'>{name}</Heading>
                            <Text py='2'>
                                {description}
                            </Text>
                            <Text color='blue.600' fontSize='xl'>
                                {`${formatReal(value)}`}
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <ButtonGroup spacing='1'>
                                <Center>
                                    <Button variant='solid' colorScheme='blue' fontSize='0.8rem'
                                        onClick={
                                            () => {
                                                if (userLogged) {
                                                    addItemCart(name, userLogged, navigate, toast);
                                                    setTimeout(() => {
                                                        navigate('/cart')
                                                    }, 500);
                                                } else {
                                                    setTimeout(() => {
                                                        navigate('/login')
                                                    }, 500);
                                                }
                                            }}>
                                        Comprar
                                    </Button>
                                    <Button variant='ghost' colorScheme='blue' fontSize='0.8rem'
                                        onClick={() => {
                                            if (userLogged) {
                                                setTimeout(() => {
                                                    addItemCart(name, userLogged, navigate, toast);
                                                }, 500);
                                            } else {
                                                setTimeout(() => {
                                                    navigate('/login')
                                                }, 500);
                                            }
                                        }}
                                    >
                                        Adicionar ao carrinho
                                    </Button>
                                </Center>
                            </ButtonGroup>
                        </CardFooter>
                    </Stack>
                </Card>
            </Box>
        </>
    )
}