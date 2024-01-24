import { Text, Box } from "@chakra-ui/react";
import { SearchProducts } from "../components/SearchProducts";
import { useFilterProducts } from "../services/searchProducts";
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

    const productsToDisplay: Product[] = useFilterProducts();

    return (
        <>
            <Box bg='white' m='20px' p='20px' fontSize='1.7rem' borderRadius='5px'>
            {
                queryCategory ?
                <Text>
                    Todos os resultados da categoria: "{queryCategory}".
                </Text>
                :
                <Text>
                    Todos os resultados da pesquisa: "{query}".
                </Text>
            }
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
                    <Box height='400px'>
                        <Text p='20px' m='20px' fontSize='2rem'>
                            Nenhum produto encontrado.
                        </Text>
                    </Box>
                )
            }
        </>
    )
}

export default Search;