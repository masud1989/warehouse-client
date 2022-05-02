import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/pages/Home/Home';
import ProductDetails from './component/pages/Home/ProductDetails/ProductDetails';
import Inventory from './component/pages/Inventory/Inventory';
import Login from './component/pages/Login/Login';
import RequireAuth from './component/pages/Login/RequireAuth';
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
      {/* <Route path='/inventory' element={<Inventory></Inventory>}></Route> */}
      <Route path='/product/:productId' element={
          <RequireAuth>
              <ProductDetails></ProductDetails>
          </RequireAuth>
        }>
      </Route>
      <Route path='/inventory' element={
          <RequireAuth>
              <Inventory></Inventory>
          </RequireAuth>
        }>
      </Route>
      
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
