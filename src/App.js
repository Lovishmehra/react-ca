import React from 'react'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Gallery from './pages/Gallery/Gallery'
import Plans from './pages/Plans/Plans'
import Trainers from './pages/Trainers/Trainers'
import NotFound from './pages/NotFound/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer/Footer'
import FAQs from './components/FAQs/FAQs'
import Bmi from './pages/Bmi/Bmi'
import Login from './pages/Login/login'
import Signup from './pages/Login/signup'
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='gallery' element={<Gallery></Gallery>}></Route>
        <Route path='plans' element={<Plans></Plans>}></Route>
        <Route path='trainers' element={<Trainers></Trainers>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/faqs' element={<FAQs></FAQs>}></Route>
        <Route path='/Bmi' element={<Bmi></Bmi>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App;
