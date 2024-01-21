import { Box } from "@chakra-ui/react"
import Header from "./Header"
import { Footer } from "./Footer"

export const Layout = ({children}: any) => {
    return(
        <>
            <Box bg='#DCDCDC' h='100%'>
                <Header />
                { children }
                <Footer />
            </Box>
        </>
    )
}