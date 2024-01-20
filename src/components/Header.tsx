import { Box, Grid, GridItem, Image, Input, InputRightElement, InputGroup, Select, Center } from "@chakra-ui/react";
import { BsCart2 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";

export const Header = ({ children }: any) => {
    return (
        <>
            <Box bg='#FFD700' textAlign='center' p='10px'>
                <Grid w='100%' h='50px' placeContent='center' templateColumns='repeat(5, 1fr)' gap='3' margin='2px auto 15px' padding='0 30px'>
                    <GridItem rowSpan={1} colSpan={2} placeSelf='self-start'>
                        <Image src='/logo-mercadolivre.png' alt='logo mercado livre' w='150px' minW='120px'/>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={3}>
                        <InputGroup borderRadius='8px' boxSizing='border-box' boxShadow='rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'>
                            <Input bg='white' placeholder="Buscar produtos..." />
                            <InputRightElement borderLeft='1px solid lightgray'>{<GoSearch />}</InputRightElement>
                        </InputGroup>
                    </GridItem>
                </Grid>

                <Grid w='100%' templateColumns='repeat(8, 1fr)' gap='2'>
                    <GridItem colSpan={5} marginLeft='20px' w='150px'>
                        <Select placeholder="Categorias" border='none'>
                            <option value='option1'>Eletronicos</option>
                            <option value='option3'>Saúde</option>
                            <option value='option4'>Moda</option>
                        </Select>
                    </GridItem>
                    <GridItem colSpan={1} placeSelf='center' w='100px'>Crie sua conta</GridItem>
                    <GridItem colSpan={1} placeSelf='center'>Entre</GridItem>
                    <GridItem colSpan={1} placeSelf='center'>
                        <BsCart2 />
                    </GridItem>
                </Grid>
            </Box>
            {children}
        </>
    )
}

export default Header;