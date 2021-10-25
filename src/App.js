import "./App.css";
import {Redirect, Route} from "react-router-dom";
import {Profile} from "./Profile";
import {Home} from "./Home";
import {useSelector} from "react-redux";

function App() {
    const dataLogin = useSelector(({loginReducer}) => loginReducer);

    return (
        <div className="App">
            <Route exact path='/'
                   render={() => <Home loginInput={dataLogin.loginInput} passwordInput={dataLogin.passwordInput}
                                       disabled={dataLogin.disabled}/>}/>
            <Route exact path='/profile'>
                {!dataLogin.disabled ? <Profile login={dataLogin.login}/> : <Redirect to={"/"}/>}
            </Route>
        </div>
    )
};

export default App;
