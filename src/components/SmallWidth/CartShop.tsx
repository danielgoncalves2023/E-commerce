import {
    Box, Center, Flex, Image, Text, Stack, Button, Card, CardBody, CardFooter, Heading, useToast, Divider,
    NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Spinner
} from "@chakra-ui/react";
import { db } from "../../database/users/users";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { formatReal } from "../../services/convertFormatValue";
import { removeItemCart } from "../../services/cartShopping";
import { AppContext } from "../AppContext";

interface Product {
    name: string;
    images: string;
    description: string;
    value: number;
    quantity: number;
}

export const CartShopSmall = () => {
    const { userLogged } = useContext(AppContext);
    const navigate = useNavigate();
    const toast = useToast();

    let userIndex: number = -1;
    for (let i = 0; i < db.length; i++) {
        if (userLogged === db[i].login.email) {
            console.log(db[i].cart);
            userIndex = i;
            break; // Sair do loop se as credenciais forem encontradas
        }
    }

    const [totalProducts, setTotalProducts] = useState(getTotalProductsQuantity(userIndex) ?? 0);
    const [totalProductsValue, setTotalProductsValue] = useState(getTotalProductsValue(userIndex) ?? 0);
    const [isFinishingCart, setIsFinishingCart] = useState(false);

    const finishCart = (userIndex: number) => {
        setIsFinishingCart(true);

        setTimeout(() => {
            if (db[userIndex].cart.length > 0) {
                db[userIndex].cart = [];
                setTotalProducts(0);
                setTotalProductsValue(0);

                alert("Compra finalizada! Obrigado pela preferência!")
            } else {
                alert("Você não possui produtos no seu carrinho")
            }

            setIsFinishingCart(false);
        }, 1000); // Tempo de simulação de 2 segundos
    };

    function getTotalProductsQuantity(userIndex: number): number {
        const user = db[userIndex];
        let totalQuantity = 0;

        user.cart.forEach(product => {
            totalQuantity += product.quantity;
        });
        return totalQuantity;
    }

    function getTotalProductsValue(userIndex: number): number {
        const user = db[userIndex];
        let totalValue = 0;

        user.cart.forEach(product => {
            totalValue += product.value * product.quantity;
        });
        return totalValue;
    }

    const handleQuantityChange = (index: number, newValue: number) => {
        const updatedCart = [...db[userIndex].cart];
        updatedCart[index].quantity = newValue;
        db[userIndex].cart = updatedCart;

        setTotalProducts(getTotalProductsQuantity(userIndex));
        setTotalProductsValue(getTotalProductsValue(userIndex));
    };

    const handleRemoveItem = (itemName: string) => {
        removeItemCart(itemName, userLogged, navigate, toast);
        setTotalProducts(getTotalProductsQuantity(userIndex));
        setTotalProductsValue(getTotalProductsValue(userIndex));
    };

    return (
        <>
            {
                userIndex === -1 ? (
                    <div>Usuário não encontrado</div>
                ) :
                    (
                        db[userIndex].cart.map((item: Product, index: number) => (
                            <Card
                                key={index}
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                m='10px'
                                p='5px'
                                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                            >
                                <Image
                                    objectFit='contain'
                                    m='10px auto'
                                    maxW={{ base: '50%', sm: '170px' }}
                                    src={item.images}
                                    alt={item.name}
                                />
                                <Stack>
                                    <CardBody>
                                        <Heading size='sm'>{item.name}</Heading>
                                        <Text py='1' fontSize='0.8rem' overflow='hidden' noOfLines={3}>
                                            {item.description}
                                            </Text>
                                        <Button fontSize='0.8rem' colorScheme='teal' variant='link' onClick={() => handleRemoveItem(item.name)}>
                                            Excluir item
                                        </Button>
                                    </CardBody>

                                    <CardFooter>
                                        <Flex w="100%" justify="space-between" alignItems="center">
                                            <NumberInput
                                                w="80px"
                                                size='sm'
                                                value={item.quantity}
                                                onChange={(valueString: string) => handleQuantityChange(index, parseInt(valueString))}
                                                min={1}
                                                max={30}
                                                clampValueOnBlur={false}
                                            >
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                            <Text fontSize='xl'>{formatReal(item.value * item.quantity)}</Text>
                                        </Flex>
                                    </CardFooter>
                                </Stack>
                            </Card>
                        ))
                    )
            }
            {
                db[userIndex].cart.length >= 1 ?
                    (
                        <Box background="white" w="100%" h="400px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                            <Center>
                                <Flex direction="column" alignItems="center" w="80%">
                                    <Heading m="40px 0" fontSize='1.5rem'>Carrinho de compras</Heading>

                                    <Flex justify="start" w="100%">
                                        <Text fontSize='xl' w="300px" textAlign="start">
                                            Produtos ({totalProducts})
                                        </Text>
                                    </Flex>

                                    <Flex justify="space-between" w="100%">
                                        <Text fontSize='xl' w="300px">Envios</Text>
                                        <Flex justify="end" w="100%" as='i'>
                                            <Text fontSize='xl' textDecoration="line-through">R$ 59,90</Text>
                                            <Divider orientation='vertical' padding="5px" borderColor="transparent" />
                                            <Text fontSize='xl'>Grátis</Text>
                                        </Flex>
                                    </Flex>

                                    <Flex justify="space-between" w="100%">
                                        <Text fontSize='xl' fontWeight="bold">Total da compra</Text>
                                        <Text fontSize='xl' fontWeight="bold">{formatReal(totalProductsValue)}</Text>
                                    </Flex>

                                    {
                                        (isFinishingCart !== true) ?
                                            (
                                                <Button colorScheme='blue' fontSize='xl' p='20px' marginTop='20px'
                                                    onClick={
                                                        () => {
                                                            finishCart(userIndex);
                                                            setTimeout(() => {
                                                                navigate('/')
                                                            }, 1500)
                                                        }
                                                    }>
                                                    Finalizar compra
                                                </Button>
                                            ) :
                                            (
                                                <Spinner p='20px' marginTop='20px'
                                                    thickness='4px'
                                                    speed='0.65s'
                                                    emptyColor='gray.200'
                                                    color='blue.500'
                                                    size='sm'
                                                />
                                            )
                                    }

                                </Flex>
                            </Center>
                        </Box>
                    ) :
                    (
                        <Box background="white" w="100%" h="400px" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                            <Center>
                                <Flex direction="column" alignItems="center" w="70%">
                                    <Heading m="50px 0" fontSize='1.7rem'>Carrinho de compras</Heading>

                                    <Flex justify="start" w="100%">
                                        <Text fontSize='2xl' w="300px" textAlign="start">
                                            Produtos ({totalProducts})
                                        </Text>
                                    </Flex>

                                    <Flex justify="space-between" w="100%">
                                        <Text fontSize='xl' fontWeight="bold">Total da compra</Text>
                                        <Text fontSize='xl' fontWeight="bold">{formatReal(totalProductsValue)}</Text>
                                    </Flex>

                                    <Flex justify="start" w="100%">
                                        <Text fontSize='2xl' w="auto" marginTop="30px" textAlign="center">
                                            Você não possui nenhum produto no seu carrinho.
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Center>
                        </Box>
                    )
            }
        </>
    );
};
