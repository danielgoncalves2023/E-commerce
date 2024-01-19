import { Box, Grid, GridItem, Image, Input, InputRightElement, InputGroup, Select } from "@chakra-ui/react";
import { BsCart2 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import React from "react";

export const Header = ({ children }: any) => {
    return (
        <>
            <Box bg='#FFD700' textAlign='center' p='10px'>
                <Grid w='100%' templateColumns='repeat(5, 1fr)' gap='5' margin='2px 0 15px'>
                    <GridItem rowSpan={1} colSpan={2}>
                        <Image src='/logo-mercadolivre.png' alt='logo mercado livre' w='30%' ml='80px' />
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={3} marginEnd='50px'>
                        <InputGroup>
                            <Input bg='white' placeholder="Buscar produtos..." />
                            <InputRightElement borderLeft='1px solid lightgray'>{<GoSearch />}</InputRightElement>
                        </InputGroup>
                    </GridItem>
                </Grid>

                <Grid w='100%' templateColumns='repeat(8, 1fr)' gap='1'>
                    <GridItem colSpan={5} placeSelf='start' marginLeft='70px'>
                        <Select placeholder="Categorias" border='none'>
                            <option value='option1'>Eletronicos</option>
                            <option value='option3'>Saúde</option>
                            <option value='option4'>Moda</option>
                        </Select>
                    </GridItem>
                    <GridItem colSpan={1} placeSelf='center'>Crie sua conta</GridItem>
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