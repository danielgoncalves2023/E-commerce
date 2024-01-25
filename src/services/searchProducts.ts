import { electronics, health, fashion, products } from "../products/products";

interface Product {
    name: string;
    images: string;
    description: string;
    value: string;
}

export const useFilterProducts = (queryCategory: any, query: any): Product[] => {
    var filteredProducts: Product[] = [];

    // Se o usuário fizer uma pesquisa de categoria, irá chamar essa função...
    if (queryCategory) {
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

    // Se o usuário fizer uma pesquisa de por query, irá chamar essa...
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

    // No final irá retornar todos os produtos que estiveram dentro dos critérios de pesquisa.
    return filteredProducts;
}
