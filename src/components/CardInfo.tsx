import { Button, ButtonGroup, Card, Image, Text, CardBody, CardFooter, Divider, Heading, Stack, Center } from "@chakra-ui/react"
import { products } from "../products/products"

interface CardInfoProps {
    images: string;
    name: string;
    description: string;
    value: string;
}

export const CardInfo = ({ images, name, description, value }: CardInfoProps) => {
    return (
        <>
            <Center>
                <Card maxW='270px'>
                    <CardBody>
                        <Image
                            src={images}
                            alt={name}
                            borderRadius='sm'
                            boxSize='10rem'
                            objectFit='contain'
                        />
                        <Stack mt='4' spacing='2'>
                            <Heading fontSize='1rem' padding='5px'>{name}</Heading>
                            <Text maxH='140px' overflowY='scroll'>
                                {description}
                            </Text>
                            <Text color='blue.600' fontSize='xl'>
                                {value}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider m='2px' />
                    <CardFooter>
                        <ButtonGroup spacing='1'>
                            <Button variant='solid' colorScheme='blue' fontSize='0.8rem'>
                                Comprar
                            </Button>
                            <Button variant='ghost' colorScheme='blue' fontSize='0.8rem'>
                                Adicionar no carrinho
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Center>
        </>
    )
}