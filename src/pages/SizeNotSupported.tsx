import { Box, Center, Flex, Text } from "@chakra-ui/react"

export const SizeNotSupported = () => {
    return (
        <Center>
            <Box w='300px' h='400px' margin='auto' background='white'>
                <Flex flexDirection='column' justifyContent='center' alignItems='center'>
                    <Text marginTop='150px' textAlign='center' fontWeight='bold'>
                        Desculpe, tamanho de dispositivo não suportado.
                    </Text>
                    <Text marginTop='50px' textAlign='center' fontWeight='bold'>
                        Estamos trabalhando nisso!
                    </Text>
                </Flex>
            </Box>
        </Center>
    )
}