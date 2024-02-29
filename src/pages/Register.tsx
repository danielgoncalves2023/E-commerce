import {
    Box, Grid, FormControl, FormLabel, Input, Button, FormErrorMessage, Text, Center
} from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterNewUser } from "../services/registerUser";

export const Register = () => {
    const navigate = useNavigate()

    const [email, inputEmail] = useState('')
    const handleEmailChange = (e: any) => inputEmail(e.target.value)
    const [password, inputPassword] = useState('')
    const handlePasswordChange = (e: any) => inputPassword(e.target.value)
    const [user, inputuUser] = useState('')
    const handleUserChange = (e: any) => inputuUser(e.target.value)

    const isErrorEmail = email === '';
    const isErrorPassword = password === '';
    const isErrorUser = user === '';

    return (
        <>
            <Box bg='white' w='auto' m='auto' p='20px' h='80dvh' >
                <Center>
                    <Text fontSize='2rem'>
                        Cadastre sua conta
                    </Text>
                </Center>
                <Grid placeContent="center">
                    <FormControl isInvalid={isErrorEmail || isErrorPassword || isErrorUser} m='30px auto'>
                        <FormLabel fontSize='lg' mt='10px'>Usuário</FormLabel>
                        <Input type='email' value={user} minWidth='300px' w='400px' onChange={handleUserChange} />
                        <FormLabel fontSize='lg' mt='10px'>Email</FormLabel>
                        <Input type='email' value={email} minWidth='300px' w='400px' onChange={handleEmailChange} />
                        <FormLabel fontSize='lg' mt='10px'>Senha</FormLabel>
                        <Input type='password' value={password} onChange={handlePasswordChange} />
                        {(isErrorEmail || isErrorPassword || isErrorUser) &&
                            <FormErrorMessage>Todos os campos são obrigatórios.</FormErrorMessage>
                        }
                    </FormControl>
                    <Button
                        colorScheme='blue'
                        size='lg'
                        mt="4"
                        onClick={
                            () => {
                                setTimeout(() => {
                                    if (isErrorEmail || isErrorPassword || isErrorUser) {
                                        alert('Favor preencher todos os campos')
                                    } else {
                                        RegisterNewUser(user, email, password, navigate)
                                    }
                                }, 400);
                            }
                        }
                    >
                        Criar conta
                    </Button>
                    <Button
                        colorScheme='blue'
                        variant='outline'
                        size='lg'
                        mt="4"
                        onClick={() => {
                            setTimeout(() => {
                                navigate('/login')
                            }, 400);
                        }}
                    >
                        Já tenho conta
                    </Button>
                </Grid>
            </Box>
        </>
    )
}