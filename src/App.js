import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path= '/' exact component={Home}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
