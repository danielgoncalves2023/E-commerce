import { Box } from "@chakra-ui/react"
import { Header } from "./Header";
import { CardInfo } from "./CardInfo";

export const Layout = () => {
    return (
        <Box>
            <Header>
                <CardInfo />
            </Header>
        </Box>
    )
}

export default Layout;