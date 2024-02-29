import {
    Box, FormControl, FormLabel, Input, FormErrorMessage, Button, Text, Grid, Center
} from "@chakra-ui/react"
import { useContext, useState } from "react"
import { AppContext } from "../components/AppContext"
import { useNavigate } from "react-router-dom"
import { LoginUser } from "../services/loginUser"

export const Login = () => {
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
            <Box bg='white' w='auto' m='auto' p='20px' h='70dvh' >
                <Center>
                    <Text fontSize='2rem'>
                        Entrar
                    </Text>
                </Center>
                <Grid placeContent="center">
                    <FormControl isInvalid={isErrorEmail || isErrorPassword} m='30px auto'>
                        <FormLabel fontSize='lg'>Email</FormLabel>
                        <Input type='email' value={email} minWidth='300px' w='400px' onChange={handleEmailChange} />
                        <FormLabel fontSize='lg' mt='10px'>Senha</FormLabel>
                        <Input type='password' value={password} onChange={handlePasswordChange} />
                        {(isErrorEmail || isErrorPassword) &&
                            <FormErrorMessage>Email e senha obrigatórios.</FormErrorMessage>
                        }
                    </FormControl>
                    <Button
                        colorScheme='blue'
                        size='lg'
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
                    colorScheme='blue' variant='outline' size='lg' mt="4"
                    onClick={() => {
                        setTimeout(() => {
                            navigate('/register')
                        }, 400);
                    }}
                >Criar conta
                </Button>
            </Grid>
        </Box >
        </>
    )
}