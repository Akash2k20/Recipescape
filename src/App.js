import Landingpage from './pages/landing.page';
import Login from './pages/auth/login';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Signup from './pages/auth/signup';
import Homepage from './pages/home.page';
// import Accountpage from './pages/account.page';
import Addrecipe from './pages/addrecipe.page';
import Feedpage from './pages/feed.page';
import { useSelector } from 'react-redux';


function App() {
  const {user} = useSelector((state) => ({...state}))
  
  return (
    <Routes>
      {user ? (
        <>
          <Route exact path="/homepg" element={<Homepage />} />
          <Route exact path="/addrecipe" element={<Addrecipe />} />
          <Route exact path="/feed" element={<Feedpage />} />
        </>
      ) : (
        <>
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Landingpage />} />
        </>
      )}
    </Routes>
  );
}

export default App;
