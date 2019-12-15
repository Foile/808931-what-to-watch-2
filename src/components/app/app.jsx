import React from "react";
import MainScreen from '../pages/main-screen/main-screen';
import UserPage from "../pages/user-page/user-page";
import {Switch, Route} from "react-router-dom";
import MovieCardFull from "../pages/movie-card-full/movie-card-full";
import NotFound from "../pages/not-found/not-found";
import AddReview from "../pages/add-review/add-review";
import MyList from "../pages/my-list/my-list";
import {Router} from "react-router-dom";
import history from "../../history";
import MoviePlayer from "../movie-player/movie-player";

const App = () =>
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={MainScreen}/>
      <Route path="/mylist" exact component={MyList} />
      <Route path="/login" exact component={UserPage}/>
      <Route path="/films/:id" exact component={MovieCardFull}/>
      <Route path="/films/:id/review" exact component={AddReview}/>
      <Route path='/films/:id/player' component={MoviePlayer}/>
      <Route path="/films/:id/:nav" exact component ={MovieCardFull}/>
      <Route component = {NotFound}/>
    </Switch>
  </Router>;

export default App;
