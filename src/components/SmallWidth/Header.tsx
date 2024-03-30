import {
    Box, Grid, GridItem, Image, Input, InputRightElement, InputGroup, Select
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import { db } from "../../database/users/users";

export const HeaderSmall = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const { userLogged, setUserLogged } = useContext(AppContext)
    const navigate = useNavigate()

    // Barra de pesquisa de produto
    const [searchBar, setSearchBar] = useState('');

    // Pesquisar produto por categoria
    const handleCategoryChange = (event: any) => {
        const selectedCategory = event.target.value;
        navigate(`/search?category=${selectedCategory}`)
    }

    // Deslogar
    const logout = () => {
        setIsLoggedIn(false)
        setUserLogged("")
        navigate('/')
    }

    let userIndex: number = -1;
    for (let i = 0; i < db.length; i++) {
        if (userLogged === db[i].login.email) {
            console.log(db[i].cart);
            userIndex = i;
            break; // Sair do loop se as credenciais forem encontradas
        }
    }
    
    return (
        <>
            {/* Barra superior */}
            <Box bg='#FFD700' textAlign='center' p='10px' mb='10px' boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;">
                <Grid w='100%' h='30px' alignItems='center' templateColumns='repeat(5, 1fr)'
                    margin='5px auto 10px' padding='0 20px' justifyContent='space-between'>
                    <GridItem rowSpan={1} colSpan={2} placeSelf='self-start'>
                        <Link to='/'>
                            <Image src='/logo-mercadolivre.png' alt='logo mercado livre' w='100px' />
                        </Link >
                    </GridItem >
                    <GridItem rowSpan={1} colSpan={3} placeSelf='self-end'>
                        <InputGroup borderRadius='8px' boxSizing='border-box' w='150px'
                            boxShadow='rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'>
                            <Input
                                fontSize='0.7rem'
                                h='30px'
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
                                textOverflow='ellipsis'
                            />
                            <InputRightElement height='30px' borderLeft='1px solid lightgray'>
                                <Link to={`/search?query=${searchBar}`}>
                                    <GoSearch size='1rem' cursor='pointer' />
                                </Link>
                            </InputRightElement>
                        </InputGroup>
                    </GridItem>
                </Grid >

                {/* Barra inferior */}
                <Grid w='100%' templateColumns='repeat(8, 1fr)' gap='3' m='5px auto 0px'>
                    {
                        isLoggedIn ?
                            (
                                <>
                                    <GridItem colSpan={6} w='130px'>
                                        <Select
                                            fontSize='1rem'
                                            placeholder="Categorias"
                                            value=''
                                            border='none'
                                            onChange={handleCategoryChange}
                                        >
                                            <option value='electronics'>Eletrônicos</option>
                                            <option value='health'>Saúde</option>
                                            <option value='fashion'>Moda</option>
                                        </Select>
                                    </GridItem>
                                    <GridItem fontSize='1rem' colSpan={1} cursor='pointer' placeSelf='center'>
                                        <Link to='/' onClick={() => logout()}>Desconectar</Link>
                                    </GridItem>
                                    <GridItem colSpan={1} cursor='pointer' placeSelf='center'>
                                        <Link to='/cart'>
                                            <BsCart2 size='1.2rem' />
                                        </Link>
                                    </GridItem>
                                </>
                            )
                            :
                            (
                                <>
                                    <GridItem colSpan={4} w='130px'>
                                        <Select
                                            fontSize='1rem'
                                            placeholder="Categorias"
                                            value=''
                                            border='none'
                                            onChange={handleCategoryChange}
                                        >
                                            <option value='electronics'>Eletrônicos</option>
                                            <option value='health'>Saúde</option>
                                            <option value='fashion'>Moda</option>
                                        </Select>
                                    </GridItem>
                                    <GridItem whiteSpace="nowrap" fontSize='1rem' colSpan={2} cursor='pointer' placeSelf='center' w='120px'>
                                        <Link to='/register'>Crie sua conta</Link>
                                    </GridItem>
                                    <GridItem fontSize='1rem' colSpan={1} cursor='pointer' placeSelf='center'>
                                        <Link to='/login'>Entre</Link>
                                    </GridItem>
                                    <GridItem colSpan={1} cursor='pointer' placeSelf='center'>
                                        <Link to='/cart'>
                                            <BsCart2 size='1.2rem' />
                                        </Link>
                                    </GridItem>
                                </>
                            )
                    }
                </Grid>
            </Box >
        </>
    )
}

export default HeaderSmall;