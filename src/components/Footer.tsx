import { Box, Flex, Text, Link } from "@chakra-ui/react"
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
    return (
        <>
            <Box as="footer" mt="10px" p="10px" bottom='0px' position='absolute' w='100%' h='70px' bg="gray.800" color="white"
                boxShadow="rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;">
                <Flex justify="space-between" align="center">
                    <Text fontWeight="bold" fontSize="1rem">&copy; 2024 Daniel Gonçalves dos Santos</Text>
                    <Flex>
                        <Link mx="2" href="https://github.com/danielgoncalves2023" isExternal>
                            <VscGithub fontSize='2.5rem' />
                        </Link>
                        <Link mx="2" href="https://www.linkedin.com/feed/" isExternal>
                            <CiLinkedin fontSize='2.5rem' />
                        </Link>
                        <Link mx="2" href="https://wa.me/5511958927740" isExternal>
                            <BsWhatsapp fontSize='2.3rem' />
                        </Link>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}