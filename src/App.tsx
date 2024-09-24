import { MainLayout } from '../src/components/layout'
import { Home } from '../src/pages/home'
import { Catalog } from './pages/catalog'
import { Calendar } from './pages/calendar'
import { Contact } from '../src/pages/contact'
import { Terms } from '../src/pages/terms'
import { LoginUser } from '../src/pages/login'
import { Cart } from '../src/pages/cart'
import { Admin } from '../src/pages/admin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <>     
        <BrowserRouter> 
          <MainLayout>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/catalog' element={<Catalog/>}/>
              <Route path='/calendar' element={<Calendar/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/terms' element={<Terms/>}/>
              <Route path='/login' element={<LoginUser/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/admin' element={<Admin/>}/>
            </Routes>
          </MainLayout>
        </BrowserRouter>
    </>
    </>
  )
}

export default App
