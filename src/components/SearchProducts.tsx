import { Card, Image, CardBody, CardFooter, Stack, Heading, Text, Button, Box, ButtonGroup, Center } from "@chakra-ui/react"

interface CardInfoProps {
    images: string;
    name: string;
    description: string;
    value: string;
}

export const SearchProducts = ({ images, name, description, value }: CardInfoProps) => {
    return (
        <>
            <Box m='0 20px'>
                <Card
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
                                {value}
                            </Text>
                        </CardBody>
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
                    </Stack>
                </Card>
            </Box>
        </>
    )
}