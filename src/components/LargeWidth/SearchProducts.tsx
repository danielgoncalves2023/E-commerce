import {
    Card, Image, CardBody, CardFooter, Stack, Heading, Text, Button, Box, ButtonGroup, Center, useToast
} from "@chakra-ui/react"
import { formatReal } from "../../services/convertFormatValue";
import { useNavigate } from "react-router-dom";
import { addItemCart } from "../../services/cartShopping";
import { useSelector } from "react-redux";

interface CardInfoProps {
    images: string;
    name: string;
    description: string;
    value: number;
}

export const SearchProducts = ({ images, name, description, value }: CardInfoProps) => {
    const { emailUser } = useSelector((rootReducer: any) => rootReducer.userReducer)
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
                        maxW={{ base: '100%', sm: '180px' }}
                        src={images}
                        alt={name}
                        marginRight='30px'
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='sm'>{name}</Heading>
                            <Text py='2' fontSize='md'>
                                {description}
                            </Text>
                            <Text color='blue.600' fontSize='md'>
                                {`${formatReal(value)}`}
                            </Text>
                        </CardBody>
                        <CardFooter>
                            <ButtonGroup spacing='1'>
                                <Center>
                                    <Button variant='solid' colorScheme='blue' fontSize='0.8rem'
                                        onClick={
                                            () => {
                                                if (emailUser) {
                                                    addItemCart(name, emailUser, navigate, toast);
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
                                            if (emailUser) {
                                                setTimeout(() => {
                                                    addItemCart(name, emailUser, navigate, toast);
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