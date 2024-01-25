import { Heading, Image, Text, Card, Stack, CardBody, CardFooter, Button } from "@chakra-ui/react"

// TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO
export const ItemCartShop = () => {
    return (
        <>
            <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
                <Image margin='20px' borderRadius='10px' objectFit='contain' maxW={{ base: '100%', sm: '200px' }}
                    src={'/iphone12.jpg'}
                    alt='Caffe Latte' />

                <Stack>
                    <CardBody>
                        <Heading size='md'>iPhone exemplo</Heading>
                        <Text py='2'>
                            iPhone exemploiPhone exemploiPhone exemploiPhone exemploiPhone exemploiPhone exemplo
                            iPhone exemploiPhone exemploiPhone exemploiPhone exemplo.
                            iPhone exemploiPhone exemploiPhone exemploiPhone exemploiPhone exemploiPhone exemplo
                            iPhone exemploiPhone exemploiPhone exemploiPhone exemplo.
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue'>
                            Buy Latte
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>

        </>
    )
}