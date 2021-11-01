import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/MainPage/Header';
import Footer from './components/MainPage/Footer';
import CreateAccount from './components/widgets/CreateAccount';
import Login from './components/widgets/Login';
import MyRecipes from "./components/widgets/MyRecipes";
import NewRecipe from './components/widgets/NewRecipe';
import {  Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Breakfast from './components/Categorys/Breakfast';
import Lunch from './components/Categorys/Lunch';
import Brunch from './components/Categorys/Brunch';
import Dinner from './components/Categorys/Dinner';
import MyProfile from './components/widgets/MyProfile';
import MyRecipesUpdate from './components/widgets/MyRecipesUpdate';
import PopUp from './components/widgets/PopUp';
import CreateRecipe from './components/widgets/CreateRecipe';
import './styles/App.css'

function App(){
  return (
    <div className = 'container-fixed'>
     

    <Header />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        
        <Route path='/register'>
          <CreateAccount />
        </Route>


        <Route path='/newrecipe'>
          <NewRecipe />
        </Route>

        <Route  exact path='/'>
          <HomePage />
        </Route>
        
        <Route path='/breakfast'>
          <Breakfast />
        </Route>


        <Route path='/lunch'>
          <Lunch />
        </Route>

        <Route path='/brunch'>
          <Brunch />
        </Route>


        <Route path='/dinner'>
          <Dinner />
        </Route>

        <Route path='/my_profile'>
          <MyProfile />
        </Route>

        <Route path='/my_recipes'>
          <MyRecipes />
        </Route>


        <Route path='/my_recipes_update'>
          <MyRecipesUpdate />
        </Route>

        <Route path='/popup'>
          <PopUp />
        </Route>

        <Route path='/create_recipe'>
          <CreateRecipe />
        </Route>

      

  </Switch>

    <Footer />
    </div>
  )
}


// const NotFound = () => {
// return <div>Error 404!</div>
// }

export default App;