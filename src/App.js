import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandPage from './components/Landing/Landing';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage/LoginPage';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import Bootcamps from './components/pages/Bootcamps/Bootcamps';
import Forget from './components/pages/Forget/Forget';
import updattaPass from './components/pages/upDataePass/updattaPass';

function App() {

  return (
    <div className="App">

      <Navbar />


      <Switch>
        <Route path='/' exact component={LandPage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/registertion' exact component={RegisterPage} />
        <Route path='/Bootcamps' exact component={Bootcamps} />
        <Route path='/forgetPassword' exact component={Forget} />
        <Route path='/uppDatePass' exact component={updattaPass} />
      </Switch>



    </div>
  );
}

export default App;
