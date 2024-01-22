import { Text, Box } from "@chakra-ui/react";
import { SearchProducts } from "../components/SearchProducts";
import { useFilterProducts } from "../services/searchProducts";

interface Product {
    name: string;
    images: string;
    description: string;
    value: string;
}

const Search = () => {

    const productsToDisplay: Product[] = useFilterProducts();

    return (
        <>
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
                )}

        </>
    )
}

export default Search;