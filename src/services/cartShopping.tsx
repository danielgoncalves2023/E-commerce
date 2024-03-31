import { db } from "../database/users/users"
import { products } from "../database/products/products";

interface Product {
    name: string;
    images: string;
    description: string;
    value: number;
    quantity: number;
}

export const addItemCart = (productName: string, emailUser: string, navigate: any, toast: any) => {
    // Procurar pelo usuário no banco de dados
    const userIndex = db.findIndex(user => user.login.email === emailUser);

    // Se não encontrar usuário (não estiver logado), será redirecionado a página de login
    if (userIndex === -1) {
        navigate('/login');
        return;
    }

    const allProducts = Object.values(products).flat();
    const productFound = allProducts.find(product => product.name === productName);

    // Se não encontrar o produto para adicionar ao carrinho
    if (!productFound) {
        console.error(`Produto com o nome ${productName} não encontrado.`);
        return;
    }

    const existingProductIndex = db[userIndex].cart.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
        // Se o produto já estiver no carrinho, incrementa a quantidade
        db[userIndex].cart[existingProductIndex].quantity++;
    } else {
        // Se o produto não estiver no carrinho, adiciona com quantidade 1
        db[userIndex].cart.push({ ...productFound, quantity: 1 });
    }

    toast({
        title: `Produto adicionado ao carrinho.`,
        status: 'success',
        isClosable: true,
    });
}

export const removeItemCart = (productName: string, emailUser: string, navigate: any, toast: any) => {
    // Encontrar o índice do usuário no carrinho
    const userIndex = db.findIndex(user => user.login.email === emailUser);

    // Acessar o carrinho do usuário
    const userCart = db[userIndex].cart as Product[];

    // Verificar se o carrinho do usuário é válido
    if (userIndex === -1) {
        console.error('Usuário não encontrado.');
        return;
    } else {
        // Criar um novo carrinho excluindo o produto especificado
        const newCart: Product[] = userCart.filter(product => product.name !== productName);

        // Atualizar o carrinho do usuário com o novo carrinho
        db[userIndex].cart = newCart;
        setTimeout(() => { navigate('/cart') }, 500)
    }

    toast({
        title: `Produto removido do carrinho.`,
        status: 'success',
        isClosable: true,
    });
}