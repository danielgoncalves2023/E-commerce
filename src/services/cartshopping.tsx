import { db } from "../database/users/users"
import { products } from "../database/products/products";

interface Product {
    name: string;
    images: string;
    description: string;
    value: number;
    quantity: number;
}

interface User {
    name: string;
    login: {
        email: string;
        password: string;
    };
    cart: Product[];
}

interface Products {
    [department: string]: Product[];
}

export const addItemCart = (productName: string, emailUser: string, navigate: any, toast: any) => {
    // Procurar pelo usuário no banco de dados
    const user: User | undefined = db.find(user => user.login.email === emailUser);

    // Se não encontrar usuário (não estiver logado), será redirecionado a página de login
    if (!user) {
        navigate('/login');
        return;
    } else {
        // Encontrar o índice do usuário no carrinho
        const userIndex = db.findIndex(user => user.login.email === emailUser);

        let productFound: Product | undefined;

        // Procurar pelo produto nos diferentes departamentos
        for (const department in products) {
            if (Object.prototype.hasOwnProperty.call(products, department)) {
                const product = (products as Products)[department].find(prod => prod.name === productName);
                if (product) {
                    productFound = product;
                    break;
                }
            }
        }

        // Se não encontrar o produto para adicionar ao carrinho
        if (!productFound) {
            console.error(`Produto com o nome ${productName} não encontrado.`);
            return;
        } else {
            let productAlreadyInCart = false;

            for (let i = 0; i < db[userIndex].cart.length; i++) {
                if (productFound.name === db[userIndex].cart[i].name) {
                    db[userIndex].cart[i].quantity++;
                    productAlreadyInCart = true;
                    break; // Encerra o loop assim que o produto for encontrado
                }
            }

            if (!productAlreadyInCart) {
                // Adicionar o produto ao carrinho do usuário
                db[userIndex].cart.push(productFound);
            }

            toast({
                title: `Produto adicionado ao carrinho.`,
                status: 'success',
                isClosable: true,
            });
        }
    }
};

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