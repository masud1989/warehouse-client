import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/pages/Home/Home';
import Login from './component/pages/Login/Login';
import Register from './component/pages/Register/Register';
import Footer from './component/shared/Footer/Footer';
// import Header from './component/shared/Header/Header';

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
    </Routes>

      


    {/* <Footer></Footer> */}
    </div>
  );
}

export default App;

// Client Repo
// https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-masud1989 

// Client Site Live 
// https://inventory-project-2f568.firebaseapp.com


//Server site repo: https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-masud1989
