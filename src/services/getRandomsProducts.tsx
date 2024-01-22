import { electronics, fashion, health } from "../products/products"

export const getRandomsProducts = (n: number) => {
    const allProducts = [...electronics, ...fashion, ...health];
    const randomProducts: any = [];

    n = Math.min(n, allProducts.length);

    while (randomProducts.length < n) {
        const randomIndex = Math.floor(Math.random() * allProducts.length);
        const randomProduct = allProducts[randomIndex];

        // Certifique-se de que o produto não foi selecionado anteriormente
        if (!randomProducts.includes(randomProduct)) {
            randomProducts.push(randomProduct);
        }
    }

    return randomProducts;
}