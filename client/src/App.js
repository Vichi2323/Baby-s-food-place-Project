import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainPage/Main';
import CreateAccount from './components/widgets/CreateAccount';
import Login from './components/widgets/Login';
import MyRecipes from "./components/my-recipes/MyRecipes.component";
// import { Row, Col } from 'react-bootstrap';
import NewRecipe from './components/widgets/NewRecipe';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

function App(){
  return (
    <div className = 'container'>
    <BrowserRouter>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        
        <Route path='/register'>
          <CreateAccount />
        </Route>

        <Route path='/myrecipe'>
          <MyRecipes />
        </Route>

        <Route path='/newrecipe'>
          <NewRecipe />
        </Route>

        <Route exact path='/'>
          <Main />
        </Route>

        <Route path='*'>
          <NotFound />
        </Route>
        

      </Switch>
    </BrowserRouter>
    </div>
  )
}


const NotFound = () => {
return <div>Error 404!</div>
}

export default App;