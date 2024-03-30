import { Box } from "@chakra-ui/react"
import Header from "./Header"
import { Footer } from "./Footer"
import { useMediaQuery } from 'react-responsive';
import HeaderResponsive from "./HeaderResponsive";

export const Layout = ({ children }: any) => {
    const responsiveMode = useMediaQuery({
        query: '(max-device-width: 420px)'
    });

    return (
        <>
            {
                responsiveMode ?
                    (
                        <>
                            <Box bg='#DCDCDC' h='100%' pb='100px'>
                                <HeaderResponsive />
                                {children}
                            </Box >
                            <Footer />
                        </>
                    ) :
                    (
                        <>
                            <Box bg='#DCDCDC' h='100%' pb='100px'>
                                <Header />
                                {children}
                            </Box >
                            <Footer />
                        </>
                    )
            }
        </>
    )
}
