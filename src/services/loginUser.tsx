import { dataBaseUsers } from "../components/AppContext";

// Service de login para validação de usuário:
export const LoginUser = (
    email: string,
    password: string,
    setIsLoggedIn: ((value: boolean) => void),
    setUserLogged: ((value: string) => void),
    navigate: any
) => {
    let userFound = false;

    for (let i = 0; i < dataBaseUsers.length; i++) {
        if (email === dataBaseUsers[i].login.email && password === dataBaseUsers[i].login.password) {
            setIsLoggedIn(true);
            setUserLogged(email);
            navigate('/');
            userFound = true;

            break; // Sair do loop se as credenciais forem encontradas
        }
    }

    if (!userFound) {
        alert('Email e/ou senha incorretos.');
    }
};
