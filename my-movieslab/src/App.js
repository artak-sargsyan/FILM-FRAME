
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import  Home  from './pages/Home';
import  Login  from './pages/Login';
import  Signup  from './pages/Signup';
import  Account  from './pages/Account';
import { AuthContextProvider } from './components/Context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/account' element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>}/>
        </Routes>
        <Footer />
    </AuthContextProvider>
    </div>
  );
}

export default App;
