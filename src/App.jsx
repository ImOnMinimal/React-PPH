import React from 'react';
import './App.css';
import Main from './Main/Main'
import Header from './Header/Header';
import Reg from './Reg/Reg';
import Login from './Login/Login';
import Full from './Full/Full';
// import CartCard from './Cart/CartCard';
import AddCard from './AddCard/AddCard';
import AddReview from './AddReview/AddReview';
import Profile from './Profile/Profile';
import FullReview from './FullReview/FullReview';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Favourite from './Favourite/Favourite';


import { Routes, Route } from 'react-router-dom'




function App() {



  return (
    <>

      <Routes>

        <Route path="/" element={<> <Header /><Main /> </>} />
        <Route path="Full/:slug" element={<> <Header /> <Full /> </>} />
        <Route path="Profile" element={<> <Header /> <Profile /> </>} />
        <Route path="Reg" element={<> <Header /> <Reg /> </>} />
        <Route path="Login" element={<> <Header /> <Login /> </>} />
        <Route path="AddCard" element={<> <Header /> <AddCard /> </>} />
        <Route path="AddReview" element={<> <Header /> <AddReview /> </>} />
        <Route path="FullReview/:id" element={<> <Header /> <FullReview /> </>} />
        <Route path="Cart" element={<> <Header /> <Cart /> </>} />
        <Route path="Search" element={<> <Header /> <Search /> </>} />
        <Route path="Favourite" element={<> <Header /> <Favourite /> </>} />

      </Routes>


      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Reg" element={<Reg />} />
        <Route path="/Full" element={<Full />} />
      </Routes> */}

    </>
  );
}

export default App;
