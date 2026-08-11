import FetchPokemon from './pages/FetchPokemon'
import Counter from './pages/Counter'
import { Route, Routes } from 'react-router'
import Product from './pages/Product'




function App() {
  return (
    <Routes>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/fetch-pokemon' element={<FetchPokemon/>}/>
        <Route path='/product' element={<Product/>} />
    </Routes>
  )
}

export default App