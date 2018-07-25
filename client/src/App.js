import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import NoMatch from './pages/NoMatch';
import Profile from './pages/Profile';
import PersonalProfile from './pages/PersonalProfile';
import Likes from './pages/Likes';
import Following from './pages/Following';
import Followers from './pages/Followers';
import Recipes from './pages/Recipes';
import Register from './pages/Register';
import AllRecipes from './pages/ViewAllRecipes';
import ViewRecipe from './pages/ViewRecipe';
import AddRecipe from './pages/AddRecipe';
import LandingPage from "./pages/LandingPage";
import Footer from './components/Footer';

const App = () => (
  <div>
    <Nav />
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/personalprofile/:id' component={PersonalProfile} />
          <Route exact path='/profile/:id' component={Profile} />
          <Route exact path='/profile/:id/likes' component={Likes} />
          <Route exact path='/profile/:id/following' component={Following} />
          <Route exact path='/profile/:id/followers' component={Followers} />
          <Route exact path='/profile/:id/recipes' component={Recipes} />
          <Route exact path='/recipes' component={AllRecipes} />
          <Route exact path='/likes' component={Likes} />
          <Route exact path='/following' component={Following} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/recipes/new' component={AddRecipe} />
          <Route exact path='/recipes/:id' component={ViewRecipe} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>
  );

export default App;