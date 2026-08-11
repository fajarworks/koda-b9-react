import FetchPokemon from './pages/FetchPokemon'
import Counter from './pages/Counter'
import { Route, Routes } from 'react-router'
import Product from './pages/Product'
import Home from './pages/Home'
import MainLayout from './assets/layout/MainLayout'




function App() {
  return (
    <Routes>
        <Route element={<MainLayout/>} >
        <Route path='/' element= {<Home/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/fetch-pokemon' element={<FetchPokemon/>}/>
        <Route path='/product' element={<Product/>} />
        </Route>
    </Routes>
  )
}

export default App