import { Box } from "@chakra-ui/react"
import Header from "./Header"

export const Layout = ({children}: any) => {
    return(
        <>
            <Box bg='#DCDCDC' h='100dvh'>
                <Header />
                { children }
            </Box>
        </>
    )
}