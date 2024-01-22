import { useLocation, useNavigate } from "react-router-dom";
import { electronics, health, fashion, products } from "../products/products";

interface Product {
    name: string;
    images: string;
    description: string;
    value: string;
}

export const useFilterProducts = (): Product[] => {
    const location = useLocation();
    // Utiliza as informações passadas através do URL '/search?category=fashion' para mecanismo de busca
    const queryCategory = new URLSearchParams(location.search).get('category');
    // Utiliza as informações passadas através do Input (barra de pesquisa do site) '/search?query=casaco' para mecanismo de busca
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    const navigate = useNavigate();

    var filteredProducts: Product[] = [];

    if (queryCategory) {
        // Filtra produtos pela categoria
        if (queryCategory === 'electronics') {
            return electronics;
        } else if (queryCategory === 'health') {
            return health;
        } else if (queryCategory === 'fashion') {
            return fashion;
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
