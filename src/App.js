import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RaiseMoneyPage from './pages/RaiseMoneyPage/RaiseMoneyPage';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import CompanyDetailsPage from './pages/CompanyDetailsPage/CompanyDetailsPage';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/raise-money' element={<RaiseMoneyPage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/company-details' element={<CompanyDetailsPage />} />
        <Route path='/auth' element={<AuthenticationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;