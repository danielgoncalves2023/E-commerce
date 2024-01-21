import { Box, Text } from "@chakra-ui/react";
import { SearchProducts } from "../components/SearchProducts";
import { products } from "../products/products";
import { useLocation } from "react-router-dom";

const Search = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    // const selectedCategory = searchParams.get('category') || 'electronics';

    // const categoryData = products[selectedCategory] || {};

    return (
        <>
            <Box m='20px' p='20px' bg='white'>
                <Text fontSize='1.5rem'>
                    Resultado de pesquisa para: {query}
                </Text>
            </Box>
            <SearchProducts
                images={products.fashion.overcoat_f.images}
                name={products.fashion.overcoat_f.name}
                description={products.fashion.overcoat_f.description}
                value={products.fashion.overcoat_f.value}
            />
        </>
    )
}

export default Search;