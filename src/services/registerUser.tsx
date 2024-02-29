import { dataBaseUsers } from "../components/AppContext";

interface IUser {
    name: string;
    login: {
        email: string;
        password: string;
    };
    cart: []
}

// Validação de email
const validEmail = (email: string): boolean => {
    const usuario = email.substring(0, email.indexOf("@"));
    const dominio = email.substring(email.indexOf("@") + 1, email.length);

    const isValidEmail =
        usuario.length >= 1 &&
        dominio.length >= 3 &&
        usuario.indexOf("@") === -1 &&
        dominio.indexOf("@") === -1 &&
        usuario.indexOf(" ") === -1 &&
        dominio.indexOf(" ") === -1 &&
        dominio.includes(".") &&
        dominio.indexOf(".") >= 1 &&
        dominio.lastIndexOf(".") < dominio.length - 1;

    return isValidEmail;
}

// REGISTRO de novos usuários
export const RegisterNewUser = (
    nameRg: string,
    emailRg: string,
    passwordRg: string,
    navigate: any
) => {
    const emailIsValid = validEmail(emailRg);

    if (emailIsValid) {
        for (let i = 0; i < dataBaseUsers.length; i++) {
            const user = dataBaseUsers[i];

            if (user.name == nameRg) {
                alert('Nome de usuário já existe')
                break;
            } else if (user.login.email == emailRg) {
                alert('Email já cadastrado')
                break;
            } else {
                let newUser: IUser = {
                    name: nameRg,
                    login: {
                        email: emailRg,
                        password: passwordRg
                    },
                    cart: []
                }

                dataBaseUsers.push(newUser)
                navigate('/login')
                break;
            }
        }
    } else {
        alert('Favor inserir formato de email válido.')
    }
}