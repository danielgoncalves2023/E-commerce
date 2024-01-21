import { Box, Text } from "@chakra-ui/react";
import { SearchProducts } from "../components/SearchProducts";
import { electronics, health, fashion } from "../products/products";
import { useLocation } from "react-router-dom";

interface Product {
    name: string;
    images: string;
    description: string;
    value: string;
}

const Search = () => {
    const location = useLocation();
    // Utiliza as informações passadas através do URL '/search?category=fashion' para mecanismo de busca
    const queryCategory = new URLSearchParams(location.search).get('category');
    // Utiliza as informações passadas através do Input (barra de pesquisa do site) '/search?query=casaco' para mecanismo de busca
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    const filterProducts= (): Product[] => {
        var filteredProducts: Product[] = [];

        if (queryCategory) {
            // Filtra produtos pela categoria
            if (queryCategory === 'electronics') {
                return electronics;
            } else if (queryCategory === 'health') {
                return health;
            } else if (queryCategory === 'fashion') {
                return fashion;
            } else {
                return [];
            }
        }

        // Filtra produtos pelo nome ou descrição
        else if (query) {

            for (const category of [electronics, fashion, health]) {
                for (const item of category) {
                    if (
                        item.name.toLowerCase().includes(query.toLowerCase()) ||
                        item.description.toLowerCase().includes(query.toLowerCase())
                    ) {
                        filteredProducts.push(item);
                    }
                }
            }
        }
        return filteredProducts;
    }

    const productsToDisplay: Product[] = filterProducts();

    return (
        <>
            <Box m='20px' p='20px' bg='white'>
                <Text fontSize='1.5rem'>
                    Resultado de pesquisa para: {query ? query : queryCategory}
                </Text>
            </Box>

            {
                productsToDisplay.length > 0 ? (
                    productsToDisplay.map((product, index) => (
                        <SearchProducts
                            key={index}
                            images={product.images}
                            name={product.name}
                            description={product.description}
                            value={product.value}
                        />
                    ))
                ) : (
                    <Text>
                        Nenhum produto encontrado.
                    </Text>
                )}

        </>
    )
}

export default Search;