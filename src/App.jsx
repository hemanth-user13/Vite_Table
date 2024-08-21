import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import MainPage from './Components/Mainpage';
import ProductPage from './Components/Product'
import { ProductProvider } from './Components/ProductSlice';
import PageNotFound from './Components/Error/Error'

function App() {

  return (
    <div>
      <Router>
        <ProductProvider>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/ProductList' element={<Main />} />
            <Route path='/product/:id' element={<ProductPage/>}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ProductProvider>
      </Router>
    </div>
  )
}

export default App
