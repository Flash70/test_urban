import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setLoginInput, setPasswordInput, verification} from "./redux/login";

export const Home = ({loginInput, passwordInput, disabled}) => {
    const dispatch = useDispatch();

    const addLogin = (e) => {
        const values = e.target.value;
        dispatch(setLoginInput(values))
        dispatch(verification())
    }
    const addPassword = (e) => {
        const values = e.target.value;
        dispatch(setPasswordInput(values))
        dispatch(verification())
    }


    return (
        <>
            <form>
                <div>
                    <label>login</label>
                </div>
                <div>
                    <input onChange={addLogin} value={loginInput} placeholder='Login' type="text"/>
                </div>
                <div>
                    <label>password</label>

                </div>
                <div>
                    <input onChange={addPassword} value={passwordInput} type="password"/>
                </div>
                <NavLink exact to='/profile'>
                    <button disabled={disabled}>Login</button>
                </NavLink>
            </form>
        </>
    )
};