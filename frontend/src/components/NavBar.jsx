import './NavBar.css';
import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <div className="NavBar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/addrecipe">Add Recipe</NavLink>
      <NavLink to="/mealplan">Meal Plan</NavLink>
    </div>
  );
}

export default NavBar;
