import { MainLayout } from '../src/components/layout'
import { Home } from '../src/pages/home'
import { Category } from '../src/pages/category'
import { Katanas } from '../src/pages/katanas'
import { New } from '../src/pages/new'
import { Popular } from '../src/pages/popular'
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
              <Route path='/katanas' element={<Katanas/>}/>
              <Route path='/new' element={<New/>}/>
              <Route path='/popular' element={<Popular/>}/>
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
