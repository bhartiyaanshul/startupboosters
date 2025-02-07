import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { SignupPage } from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';
import RaiseMoneyPage from './pages/RaiseMoneyPage/RaiseMoneyPage';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import CompanyDetailsPage from './pages/CompanyDetailsPage/CompanyDetailsPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/raise-money' element={<RaiseMoneyPage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/company-details' element={<CompanyDetailsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;