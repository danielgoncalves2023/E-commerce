import { Box } from "@chakra-ui/react"
import Header from "./LargeWidth/Header"
import { Footer } from "./Footer"
import { useMediaQuery } from 'react-responsive';
import HeaderSmall from "./SmallWidth/Header";

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
                            <Box bg='#DCDCDC' minH='100dvh' maxH='100%' pb='60px'>
                                <HeaderSmall />
                                {children}
                            </Box >
                            <Footer />
                        </>
                    ) :
                    (
                        <>
                            <Box bg='#DCDCDC' minH='100dvh' pb='70px'>
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
