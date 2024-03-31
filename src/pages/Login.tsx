import {
    Box, FormControl, FormLabel, Input, FormErrorMessage, Button, Text, Grid, Center
} from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from "react-redux"
import userActionTypes from "../store/reducers/user/action-types";
import { loginUser } from "../services/loginUser";

export const Login = () => {
    const responsiveMedia = useMediaQuery({
        query: '(max-device-width: 420px)'
    });

    const navigate = useNavigate()

    const [email, inputEmail] = useState('')
    const handleEmailChange = (e: any) => inputEmail(e.target.value)
    const [password, inputPassword] = useState('')
    const handlePasswordChange = (e: any) => inputPassword(e.target.value)

    const isErrorEmail = email === '';
    const isErrorPassword = password === '';

    const dispatch = useDispatch()

    return (
        <>
            {
                responsiveMedia ?
                    (
                        <Box bg='white' w='auto' p='20px' h='700px'>
                            <Center>
                                <Text marginTop='10px' fontSize='1.5rem'>
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
                                    onClick={() => loginUser(email, password, dispatch, navigate)
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
                                    onClick={() => loginUser(email, password, dispatch, navigate)}
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