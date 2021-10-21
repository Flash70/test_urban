import "./App.css";
import {Redirect, Route} from "react-router-dom";
import {Profile} from "./Profile";
import {Home} from "./Home";
import {useSelector} from "react-redux";

function App() {
    const dataLogin = useSelector(({loginReducer}) => loginReducer);
  return (
    <div className="App">
      <Route exact path='/' render={() => <Home dataLogin={dataLogin}/>}/>
      <Route exact path='/profile'>
          {!dataLogin.disabled ? <Profile dataLogin={dataLogin}/> : <Redirect to={"/"}/>}
      </Route>
    </div>
  )
}

export default App;
