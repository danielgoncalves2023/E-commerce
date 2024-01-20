import { Button, ButtonGroup, Card, Image, Text, CardBody, CardFooter, Divider, Heading, Stack, Center } from "@chakra-ui/react"

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
                <Card maxW='260px' maxH='auto' m='20px 0'>
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
                                {value}
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider m='0' />
                    <Center>
                        <CardFooter>
                            <ButtonGroup spacing='1'>
                                <Center>
                                    <Button variant='solid' colorScheme='blue' fontSize='0.8rem'>
                                        Comprar
                                    </Button>
                                    <Button variant='ghost' colorScheme='blue' fontSize='0.8rem'>
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