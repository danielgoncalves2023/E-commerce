import { Box, Grid, Button } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../components/AppContext"


export const Login = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)

    return (
        <>
            <Box bg='white' w='95%' m='auto' h='60dvh' borderRadius='10px'>
                <Grid templateColumns='repeat(5, 1fr)' gap={1} p='10px'>
                    <Button onClick={() => setIsLoggedIn(true)}>Logar</Button>
                </Grid>
            </Box>
        </>
    )
}