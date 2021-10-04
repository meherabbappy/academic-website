import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route  path = "/home">
          <Home></Home>
        </Route>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route  path = "/about">
          <About></About>
        </Route>
        <Route  path = "/services">
         <Services></Services>
        </Route>
        <Route  path = "/contact">
         <Contact></Contact>
        </Route>
        <Route  path = "*">
         <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
