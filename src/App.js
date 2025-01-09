import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { SignupPage } from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';
import RaiseMoneyPage from './pages/RaiseMoneyPage/RaiseMoneyPage';
import { Navbar } from './components/HomePage/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/raise-money' element={<RaiseMoneyPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;