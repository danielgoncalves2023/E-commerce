import { Box } from "@chakra-ui/react"



export const Layout = ({children}: any) => {
    return(
        <>
            <Box bg='#DCDCDC' h='100dvh'>
                { children }
            </Box>
        </>
    )
}