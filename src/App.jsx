import FetchPokemon from "./pages/FetchPokemon";
import Counter from "./pages/Counter";
import { Route, Routes } from "react-router";
import Product from "./pages/Product";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import DetailPage from "./pages/DetailPage";
// import Profile from './pages/ProfileForm.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="counter" element={<Counter />} />
        {/* <Route path="pokemon" element={<FetchPokemon />} />*/}

        <Route path="pokemon">
          <Route index element={<FetchPokemon />} />
          <Route path=":id" element={<DetailPage />} />
        </Route>

        <Route path="product" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
