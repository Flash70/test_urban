const LOGIN = "LOGIN";
const PASSWORD = "PASSWORD";
const VERIFICATION = "VERIFICATION";


const initialState = {
    login: "developer21",
    password: "123456",
    loginInput: "",
    passwordInput: "",
    disabled: true
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loginInput: action.payload
            };
        case PASSWORD:
            return {
                ...state,
                passwordInput: action.payload
            };
        case VERIFICATION:
            if (state.loginInput === state.login && state.passwordInput === state.password) {
                return {
                    ...state,
                    disabled: false
                }
            } return  {
                    ...state,
                    disabled: true
                };
        default:
            return state
    }
};

export const setLoginInput = (values) => ({type: LOGIN, payload: values});
export const setPasswordInput = (values) => ({type: PASSWORD, payload: values});
export const verification = () => ({type: VERIFICATION});


