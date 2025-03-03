import './App.css';
import { Routes, Route, useLocation, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RaiseMoneyPage from './pages/RaiseMoneyPage/RaiseMoneyPage';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import CompanyDetailsPage from './pages/CompanyDetailsPage/CompanyDetailsPage';
import AuthenticationPage from './pages/AuthenticationPage/AuthenticationPage';
import Checkout from './components/checkout/Checkout';
import UserProfile from './pages/UserProfile/UserProfile'; // Import UserProfile
import AdminPanel from './pages/AdminPanel/AdminPanel'; // Import AdminPanel

function App() {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === '/auth' || location.pathname === '/checkout';
  const hideFooter = location.pathname === '/admin' || location.pathname === '/profile';

  return (
    <div>
      {!hideNavbarFooter && <Navbar className="navbar" />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/raise-money' element={<RaiseMoneyPage />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/company-details' element={<CompanyDetailsPage />} />
        <Route path='/auth' element={<AuthenticationPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/profile' element={<UserProfile />} /> {/* Add UserProfile route */}
        <Route path='/admin' element={<AdminPanel />} /> {/* Add AdminPanel route */}
      </Routes>
      {!hideNavbarFooter && !hideFooter && <Footer />}
    </div>
  );
}

export default App;