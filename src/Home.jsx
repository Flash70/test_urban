import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setLoginInput, setPasswordInput, verification} from "./redux/login";

export const Home = ({dataLogin}) => {
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
        <div className='block'>
            <form action="">
                <label>login</label>
                <input onChange={addLogin} value={dataLogin.loginInput} placeholder='Login' type="text"/>
                <label>password</label>
                <input onChange={addPassword} value={dataLogin.passwordInput} type="password"/>
                <NavLink exact to='/profile' ><button disabled={dataLogin.disabled}>Login</button></NavLink>
            </form>
        </div>
    )
}