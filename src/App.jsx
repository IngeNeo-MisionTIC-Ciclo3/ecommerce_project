import Login from 'pages/auth/Login';
import Registro from 'pages/auth/Registro';
import RegistroProductos from 'pages/auth/RegistroProductos';
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
          <Route path='/productos'>
            <RegistroProductos />
          </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;