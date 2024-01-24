import { Box, Grid, GridItem, Image, Input, InputRightElement, InputGroup, Select } from "@chakra-ui/react";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
    const [searchBar, setSearchBar] = useState('');
    const navigate = useNavigate();

    const handleCategoryChange = (event: any) => {
        const selectedCategory = event.target.value;

        navigate(`/search?category=${selectedCategory}`)
    }

    return (
        <>
            <Box bg='#FFD700' textAlign='center' p='10px' mb='10px'>
                <Grid w='100%' h='50px' placeContent='center' templateColumns='repeat(5, 1fr)' gap='3' margin='2px auto 15px' padding='0 30px'>
                    <GridItem rowSpan={1} colSpan={2} placeSelf='self-start'>
                        <Link to='/'>
                            <Image src='/logo-mercadolivre.png' alt='logo mercado livre' w='150px' minW='120px' />
                        </Link>
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={3}>
                        <InputGroup borderRadius='8px' boxSizing='border-box' boxShadow='rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'>
                            <Input
                                onChange={(e) => setSearchBar(e.target.value)}
                                onKeyDown={(e) => {
                                    // Verifica se a tecla pressionada é Enter, e faz pesquisa
                                    if (e.key === 'Enter') {
                                        // Executa a lógica para enviar a pesquisa
                                        navigate(`/search?query=${searchBar}`);
                                        // Resetar o campo de input
                                        setSearchBar('');
                                    }
                                }}
                                value={searchBar} // Relacionar para resetar o input ao enviar formulário
                                bg='white'
                                placeholder="Buscar produtos..."
                            />
                            <InputRightElement borderLeft='1px solid lightgray'>
                                <Link to={`/search?query=${searchBar}`}>
                                    <GoSearch cursor='pointer' />
                                </Link>
                            </InputRightElement>
                        </InputGroup>
                    </GridItem>
                </Grid>

                <Grid w='100%' templateColumns='repeat(8, 1fr)' gap='4'>
                    <GridItem colSpan={5} marginLeft='20px' w='150px'>
                        <Select
                            placeholder="Categorias"
                            value=''
                            border='none'
                            onChange={handleCategoryChange}
                        >
                            <option value='electronics'>Eletronicos</option>
                            <option value='health'>Saúde</option>
                            <option value='fashion'>Moda</option>
                        </Select>
                    </GridItem>
                    <GridItem colSpan={1} cursor='pointer' placeSelf='center' w='100px'>Crie sua conta</GridItem>
                    <GridItem colSpan={1} cursor='pointer' placeSelf='center'>Entre</GridItem>
                    <GridItem colSpan={1} cursor='pointer' placeSelf='center'>
                        <Link to='/cart'>
                            <BsCart2 />
                        </Link>
                    </GridItem>
                </Grid>
            </Box>
        </>
    )
}

export default Header;