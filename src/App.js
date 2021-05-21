import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import LogOutPage from './components/LogOutPage'
import SignInPage from './components/SignInPage';
import {UserContextProvider} from "./components/UserContext"


function App() {
  return (
    <Router>
      <div className="App">
        <UserContextProvider>
          <Switch>
            <Route path= '/' exact component={Home}/>
            <Route path ='/zaloguj' component={LoginPage}/>
            <Route path ='/wyloguj' component={LogOutPage}/>
            <Route path ='/rejestracja' component ={SignInPage}/>
          </Switch>
        </UserContextProvider>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
