import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import LimitedOfferPage from './pages/LimitedOfferPage'
import NewArrivals from './pages/NewArrivals'
import Airforce from './pages/Airforce'
import Blazer from './pages/Blazer'
import Crater from './pages/Crater'
import Jordan from './pages/Jordan'
import Hippie from './pages/Hippie'

import Footer from './components/footer/Footer'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/limited-offer' element={<LimitedOfferPage />} />
        <Route path='/new-arrivals' element={<NewArrivals />} />
        <Route path='/airforce' element={<Airforce />} />
        <Route path='/blazer' element={<Blazer />} />
        <Route path='/crater' element={<Crater />} />
        <Route path='/jordan' element={<Jordan />} />
        <Route path='/hippie' element={<Hippie />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
