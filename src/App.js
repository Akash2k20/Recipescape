import Landingpage from './pages/landing.page';
import Login from './pages/auth/login';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Signup from './pages/auth/signup';
import Homepage from './pages/home.page';
import Accountpage from './pages/account.page';
import Addrecipe from './pages/addrecipe.page';
import Feedpage from './pages/feed.page';
import About from './pages/about.page';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import SavedRecipes from './pages/savedrecipes.page';



function App() {
  const {user} = useSelector((state) => ({...state}))
 
  
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={1000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Routes>
        {user ? (
          <>
            <Route exact path="/homepg" element={<Homepage />} />
            <Route exact path="/addrecipe" element={<Addrecipe />} />
            <Route exact path="/feed" element={<Feedpage />} />
            <Route exact path="/account" element={<Accountpage />} />
            <Route exact path = "/savedrecipes" element= {<SavedRecipes/>}/>
            
          </>
        ) : (
          <>
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Landingpage />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
