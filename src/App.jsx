import Login from 'pages/auth/Login';
import MProductos from 'pages/auth/MProductos';
import Registro from 'pages/auth/Registro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';


function App() {
  return (
    <div className='App'>
      <Router>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
          <Route path='/registro'>
            <Registro />
          </Route>
          <Route path='/MProductos'>
            <MProductos/>
          </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;