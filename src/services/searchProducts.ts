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

    var filteredProducts: Product[] = [];

    if (queryCategory) {
        // Filtra produtos pela categoria
        if (queryCategory === 'electronics') {
            filteredProducts.push(...electronics)
            return filteredProducts;
        } else if (queryCategory === 'health') {
            filteredProducts.push(...health)
            return filteredProducts;
        } else if (queryCategory === 'fashion') {
            filteredProducts.push(...fashion)
            return filteredProducts;
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
