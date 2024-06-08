// import logo from './logo.svg';
import './styles/App.css';
import './styles/HomePage.css';
import './styles/Footer.css';
import HomePage from './pages/HomePage';
import Footer from './pages/Footer';
import LogIn from './pages/LogIn'
import AboutUs from './pages/AboutUs';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Header from './Components/Header';



const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <LogIn />
    },
    {
      path: 'HomePage',
      element: <HomePage />
    },
    {
      path: 'AboutUs',
      element: <AboutUs />
    },
 
    // {
    //   path: '',
    //   element:
    // }
  ])
}


const App = () => {
 
  return (

    
    <BrowserRouter>
      <Routes />
    </BrowserRouter>

    
   
  );
};



export default App;


