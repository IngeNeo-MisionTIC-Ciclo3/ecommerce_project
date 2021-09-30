import Login from 'pages/auth/Login';
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
          </Switch>
        </Router>
    </div>
  );
}

export default App;