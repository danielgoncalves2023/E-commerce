import { Text, Box } from "@chakra-ui/react";
import { SearchProducts } from "../components/SearchProducts";
import { useFilterProducts } from "../services/searchProducts";
import { useLocation } from "react-router-dom";

interface Product {
    name: string;
    images: string;
    description: string;
    value: number;
}

const Search = () => {
    const location = useLocation();

    // Utiliza as informações passadas através do URL '/search?category=exemplo' para mecanismo de busca
    const queryCategory = new URLSearchParams(location.search).get('category');

    // Utiliza as informações passadas através do Input (barra de pesquisa do site) '/search?query=exemplo' para mecanismo de busca
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    const productsToDisplay: Product[] = useFilterProducts(queryCategory, query);

    // Essa função converte os nomes de categorias do arquivo original para a exibição em português para o usuário.
    var nameCategory = (queryCategory: string) => {
        if (queryCategory === 'electronics') {
            return 'Eletrônicos';
        } else if (queryCategory === 'health') {
            return 'Saúde';
        } else if (queryCategory === 'fashion') {
            return 'Moda';
        }
    }

    return (
        <>
            <Box bg='white' m='20px' p='20px' fontSize='1.3rem' borderRadius='5px'
            boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px;'>
                {
                    // Se a categoria foi selecionada, irá chamar os produtos da categoria;
                    // Se foi feita uma query, irá retornar o seu resultado.
                    queryCategory ?
                        <Text marginLeft="20px">
                            Todos os resultados da categoria: "{nameCategory(queryCategory)}".
                        </Text>
                        :
                        <Text marginLeft="20px">
                            Resultados da pesquisa: "{query}".
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
                        <Text p='20px' m='20px' fontSize='1.3rem'>
                            Nenhum produto encontrado.
                        </Text>
                    </Box>
                )
            }
        </>
    )
}

export default Search;