import { Box, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import { SearchProducts } from "../components/SearchProducts";
import { products } from "../products/products";
import { Layout } from "../components/Layout";

export const Search = () => {
    return (
        <>
            <Layout>
                <Header>
                    <Box m='20px' p='20px' bg='white'>
                        <Text fontSize='1.5rem'>
                            Resultado de pesquisa encontrados:
                        </Text>
                    </Box>
                    <SearchProducts
                        images={products.fashion.overcoat_f.images}
                        name={products.fashion.overcoat_f.name}
                        description={products.fashion.overcoat_f.description}
                        value={products.fashion.overcoat_f.value}
                    />
                </Header>
            </Layout>
        </>
    )
}