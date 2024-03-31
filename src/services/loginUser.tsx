import { db } from "../database/users/users";
import userActionTypes from "../store/reducers/user/action-types";

export const loginUser = (email: string, password: string, dispatch: any, navigate: any) => {
    let userFound = false;

    for (let i = 0; i < db.length; i++) {
        if (db[i].login.email === email) {
            setTimeout(() => {
                dispatch({
                    type: userActionTypes.LOGIN,
                    email: email,
                    password: password
                })

                userFound = true;
                navigate('/')
            }, 400)

            break;
        }
    }

    if(userFound = false){
        alert(`Email ou senha incorreto.`)
    }
}