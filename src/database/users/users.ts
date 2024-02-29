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

export var db: User[] = [
    {
        name: 'Daniel',
        login: {
            email: 'daniel@teste.com',
            password: 'daniel'
        },
        cart: []
    },
    {
        name: 'João',
        login: {
            email: 'joao@teste.com',
            password: 'joao'
        },
        cart: []
    },
    {
        name: 'Aline',
        login: {
            email: 'aline@teste.com',
            password: 'aline'
        },
        cart: []
    }
];
