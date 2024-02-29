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
    }
];
