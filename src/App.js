import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import Electronics from './routes/Electronics'
import Mobandaccess from './routes/Mobandaccess'
import More from './routes/More'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Category from './components/Category/Category';
import SingleProduct from './components/SingleProduct/SingleProduct';
import AppContext from "./utils/context";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SuccessPage from './components/SuccessPage/SuccessPage';

function App() {

useEffect(() => {
    // Check if the alert has already been shown
    const hasAlertBeenShown = localStorage.getItem('alertShown');

    if (!hasAlertBeenShown) {
      // If it hasn't been shown, display the alert and set the flag
      alert("This project is only for project purpose so i am using free plan of strapi for backend that could fetch data slow please wait for it or refresh after 30 to 40s...");
      localStorage.setItem('alertShown', 'true');
    }
  }, []);

  

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <AppContext>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Electronics' element={<Electronics />} />
            <Route path='/Mobandaccess' element={<Mobandaccess />} />
            <Route path='/More' element={<More />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path='/success' element={<SuccessPage/>} />
          </Routes>
          <Footer />
        </AppContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
