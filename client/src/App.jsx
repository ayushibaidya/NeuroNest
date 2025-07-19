
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import HomePage from './pages/HomePage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import LogActivity from './pages/LogActivity.jsx';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/log-activity" element={<LogActivity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
