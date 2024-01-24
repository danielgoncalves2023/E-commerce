import { Box, Flex, Text, Link } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <>
            <Box as="footer" mt="10px" p="4" bottom='0px' position='absolute' w='100%' bg="gray.800" color="white">
                <Flex justify="space-between" align="center">
                    <Text>&copy; 2024 Daniel Gonçalves dos Santos</Text>
                    <Flex>
                        <Link mx="2" href="#link1">
                            Link 1
                        </Link>
                        <Link mx="2" href="#link2">
                            Link 2
                        </Link>
                        <Link mx="2" href="#link3">
                            Link 3
                        </Link>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}