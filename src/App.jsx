import Login from 'pages/auth/Login';
import Registro from 'pages/auth/Registro';
import RegistroProductos from 'pages/admin/RegistroProductos';
import Ventas from 'pages/auth/Ventas';
import Usuarios from 'pages/admin/Usuarios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';


function App() {
	return (
    <div className='App'>
      <Router>
         <Switch>
            <Route path='/admin/usuarios'>
                <Usuarios />
            </Route>
            <Route path='/admin/ventas'>
                <Ventas />
             </Route>
          <Route path='/auth/registro'>
            <Registro />
          </Route>
          <Route path='/productos'>
            <RegistroProductos />
          </Route>
            <Route path='/'>
              <Login />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;