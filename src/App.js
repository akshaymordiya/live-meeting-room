import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppRoutes } from './Routes';
import MainLayout from './Layout/Main/MainLayout';
import Home from './pages/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />} > 
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      {/* <AppRoutes /> */}
    </Router>
  );
}

export default App;
