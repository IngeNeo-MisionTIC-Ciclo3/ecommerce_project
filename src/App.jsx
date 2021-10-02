import AdminLayout from 'layouts/Admin';
import Auth from 'layouts/Auth';
import Publico from 'layouts/Publico';
import Login from 'pages/auth/Login';
import Registro from 'pages/auth/Registro';
import Usuarios from 'pages/admin/Usuarios;
import Ventas from 'pages/admin/Ventas';
import MVentas from 'pages/admin/MVentas';
import Productos from 'pages/admin/RegistroProductos';
import MProductos from 'pages/admin/MProductos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';

function App() {
	return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path={['/admin', '/admin/usuarios' , '/admin/ventas', '/admin/mventas', '/admin/productos', '/admin/mproductos']}>
            <AdminLayout>
              <Switch>
                <Route path='/admin/usuarios'>
                  <Usuarios />
                </Route>
                <Route path='/admin/ventas'>
                  <Ventas />
                </Route>
                <Route path='/admin/mventas'>
                  <MVentas />
                </Route>
                <Route path='/admin/productos'>
                  <Productos />
                </Route>
                <Route path='/admin/mproductos'>
                  <MProductos />
                </Route>
              </Switch>
            </AdminLayout>
          </Route>
          <Route path={['/registro']}>
            <Auth>
              <Switch>
                <Route path='/registro'>
                  <Registro />
                </Route>
              </Switch>
            </Auth>
          </Route>
          <Route path={['/']}>
            <Publico>
              <Switch>
                <Route path='/'>
                  <Login />
                </Route>
              </Switch>
            </Publico>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;