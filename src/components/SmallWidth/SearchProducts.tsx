import {
    Card, Image, CardBody, CardFooter, Stack, Heading, Text, Button, Box, ButtonGroup, Center, useToast
} from "@chakra-ui/react"
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { formatReal } from "../../services/convertFormatValue";
import { useNavigate } from "react-router-dom";
import { addItemCart } from "../../services/cartShopping";

interface CardInfoProps {
    images: string;
    name: string;
    description: string;
    value: number;
}

export const SearchProductsSmall = ({ images, name, description, value }: CardInfoProps) => {
    const { userLogged } = useContext(AppContext)
    const toast = useToast()
    const navigate = useNavigate()

    return (
        <>
            <Box m='0 10px 5px'>
                <Card
                    boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px;'
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    padding='5px'
                >
                    <Image
                        objectFit='contain'
                        margin='10px auto 0'
                        maxW={{ base: '40%', sm: '180px' }}
                        src={images}
                        alt={name}
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='sm'>{name}</Heading>
                            <Text py='1' fontSize='0.7rem'>
                                {description}
                            </Text>
                            <Text color='blue.600' fontSize='1.5rem'>
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