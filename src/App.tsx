import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import LimitedOfferPage from './pages/LimitedOfferPage'
//import Footer from './components/footer/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/limited-offer' element={<LimitedOfferPage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
