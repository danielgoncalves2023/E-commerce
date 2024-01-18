import { Button, ButtonGroup, Card, Image, Text, CardBody, CardFooter, Divider, Heading, Stack } from "@chakra-ui/react"
import { mobile } from "../products/tecnologia/mobile"

export const CardInfo = () => {
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                        src={mobile.images}
                        alt={mobile.name}
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{mobile.name}</Heading>
                        <Text>
                            {mobile.description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            {mobile.value}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Comprar
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Adicionar no carrinho
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
}