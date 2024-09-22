import { MainLayout } from '../src/components/layout'
import { Home } from '../src/pages/home'
import { Category } from '../src/pages/category'
import { Calendar } from './pages/calendar'
import { Contact } from '../src/pages/contact'
import { Terms } from '../src/pages/terms'
import { Cart } from '../src/pages/cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <>     
        <BrowserRouter> 
          <MainLayout>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/category' element={<Category/>}/>
              <Route path='/calendar' element={<Calendar/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/terms' element={<Terms/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </MainLayout>
        </BrowserRouter>
    </>
    </>
  )
}

export default App
