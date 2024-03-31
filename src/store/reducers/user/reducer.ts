import { db } from "../../../database/users/users";
import userActionTypes from "./action-types";

interface IState {
    currentUser: string | null,
    userLogged: boolean,
    emailUser: string | null
}

const INITIAL_STATE: IState = {
    currentUser: null,
    userLogged: false,
    emailUser: null
};

const userReducer = (state = INITIAL_STATE, action: any) => {
    if (action.type === userActionTypes.LOGIN) {
        let user = null;

        for (let i = 0; i < db.length; i++) {
            if (action.email === db[i].login.email && action.password === db[i].login.password) {
                user = db[i].name;

                break; // Sair do loop se as credenciais forem encontradas
            }
        }

        return { ...state, currentUser: user, userLogged: true, emailUser: action.email }
    } else if (action.type === userActionTypes.LOGOUT) {

        console.log(state)
        return { currentUser: null, userLogged: false, emailUser: null }
    }

    console.log(state)
    return state;
}

export default userReducer;