import FetchPokemon from "./pages/FetchPokemon";
import Counter from "./pages/Counter";
import { Route, Routes } from "react-router";
import Product from "./pages/Product";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import DetailPage from "./pages/DetailPage";
import Login from "./pages/Login";
import ProfileForm from "./pages/ProfileForm";
import SurveyPenonton from "./pages/SurveyPenonton";
import TodoApp from "./pages/TodoApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="pokemon" element={<FetchPokemon />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<ProfileForm/>} />

        <Route path="pokemon">
          <Route index element={<FetchPokemon />} />
          <Route path=":id" element={<DetailPage />} />
        </Route>

        <Route path="survey-penonton" element={<SurveyPenonton/> } />
        <Route path="product" element={<Product />} />
        <Route path="todo-app" element={<TodoApp/> } />
      </Route>
    </Routes>
  );
}

export default App;
