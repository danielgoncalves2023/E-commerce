import { db } from "../database/users/users";

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
    nameRegister: string,
    emailRegister: string,
    passwordRegister: string,
    navigate: any
) => {
    const emailIsValid = validEmail(emailRegister);

    if (emailIsValid) {
        for (let i = 0; i < db.length; i++) {
            const user = db[i];

            if (user.name === nameRegister) {
                alert('Nome de usuário já existe')

                break;
            } else if (user.login.email === emailRegister) {
                alert('Email já cadastrado')

                break;
            } else {
                let newUser: IUser = {
                    name: nameRegister,
                    login: {
                        email: emailRegister,
                        password: passwordRegister
                    },
                    cart: []
                }

                db.push(newUser)
                navigate('/login')

                break;
            }
        }
    } else {
        alert('Favor inserir formato de email válido.')
    }
}