import { db } from "../database/users/users";
import userActionTypes from "../store/reducers/user/action-types";

export const loginUser = (email: string, password: string, dispatch: any, navigate: any) => {
    let userFound = false;

    for (let i = 0; i < db.length; i++) {
        if (db[i].login.email === email && db[i].login.password === password) {
            dispatch({
                type: userActionTypes.LOGIN,
                email: email,
                password: password
            })

            userFound = true;
            navigate('/')

            break;
        }
    }

    if (userFound === false) {
        alert(`Email ou senha incorreto.`)
    }
}