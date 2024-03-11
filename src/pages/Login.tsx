import {
    Box, FormControl, FormLabel, Input, FormErrorMessage, Button, Text, Grid, Center
} from "@chakra-ui/react"
import { useContext, useState } from "react"
import { AppContext } from "../components/AppContext"
import { useNavigate } from "react-router-dom"
import { LoginUser } from "../services/loginUser"
import { useMediaQuery } from 'react-responsive';

export const Login = () => {
    const responsiveMedia = useMediaQuery({
        query: '(max-device-width: 490px)'
    });

    const { setIsLoggedIn } = useContext(AppContext)
    const { setUserLogged } = useContext(AppContext)
    const navigate = useNavigate()

    const [email, inputEmail] = useState('')
    const handleEmailChange = (e: any) => inputEmail(e.target.value)
    const [password, inputPassword] = useState('')
    const handlePasswordChange = (e: any) => inputPassword(e.target.value)

    const isErrorEmail = email === '';
    const isErrorPassword = password === '';

    return (
        <>
            {
                responsiveMedia ?
                    (
                        <Box bg='white' w='auto' m='auto' p='20px' h='170dvh'>
                            <Center>
                                <Text marginTop='20px' fontSize='1.7rem'>
                                    Entrar
                                </Text>
                            </Center>
                            <Grid placeContent="center" >
                                <FormControl isInvalid={isErrorEmail || isErrorPassword} m='30px auto'>
                                    <FormLabel fontSize='1rem'>Email</FormLabel>
                                    <Input type='email' value={email} w='300px' onChange={handleEmailChange} />
                                    <FormLabel fontSize='1rem' mt='10px'>Senha</FormLabel>
                                    <Input type='password' value={password} w='300px' onChange={handlePasswordChange} />
                                    {(isErrorEmail || isErrorPassword) &&
                                        <FormErrorMessage fontSize='0.7rem'>Email e senha obrigatórios.</FormErrorMessage>
                                    }
                                </FormControl>
                                <Button
                                    colorScheme='blue'
                                    size='md'
                                    mt="4"
                                    onClick={() => {
                                        setTimeout(() => {
                                            LoginUser(email, password, setIsLoggedIn, setUserLogged, navigate)
                                        }, 400)
                                    }
                                    }
                                >
                                    Continuar
                                </Button>
                                <Button
                                    colorScheme='blue' variant='outline' size='md' mt="4"
                                    onClick={() => {
                                        setTimeout(() => {
                                            navigate('/register')
                                        }, 400);
                                    }}
                                >Criar conta
                                </Button>
                            </Grid>
                        </Box >
                    ) :
                    (
                        <Box bg='white' w='auto' m='auto' p='20px' h='100dvh'>
                            <Center>
                                <Text marginTop='20px' fontSize='1.7rem'>
                                    Entrar
                                </Text>
                            </Center>
                            <Grid placeContent="center" >
                                <FormControl isInvalid={isErrorEmail || isErrorPassword} m='30px auto'>
                                    <FormLabel fontSize='1rem'>Email</FormLabel>
                                    <Input type='email' value={email} minWidth='300px' w='400px' onChange={handleEmailChange} />
                                    <FormLabel fontSize='1rem' mt='10px'>Senha</FormLabel>
                                    <Input type='password' value={password} onChange={handlePasswordChange} />
                                    {(isErrorEmail || isErrorPassword) &&
                                        <FormErrorMessage fontSize='0.7rem'>Email e senha obrigatórios.</FormErrorMessage>
                                    }
                                </FormControl>
                                <Button
                                    colorScheme='blue'
                                    size='md'
                                    mt="4"
                                    onClick={() => {
                                        setTimeout(() => {
                                            LoginUser(email, password, setIsLoggedIn, setUserLogged, navigate)
                                        }, 400)
                                    }
                                    }
                                >
                                    Continuar
                                </Button>
                                <Button
                                    colorScheme='blue' variant='outline' size='md' mt="4"
                                    onClick={() => {
                                        setTimeout(() => {
                                            navigate('/register')
                                        }, 400);
                                    }}
                                >Criar conta
                                </Button>
                            </Grid>
                        </Box >
                    )
            }
        </>
    )
}