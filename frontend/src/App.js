import './App.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddRecipe from './pages/AddRecipe';
import MealPlan from './pages/MealPlan';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/mealplan" element={<MealPlan />} />
        </Routes>

        {/* <Route path="*" element={<NotFound />} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
