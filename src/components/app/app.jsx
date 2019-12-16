import React from "react";
import {Router, Switch, Route} from "react-router-dom";
import MyList from "@pages/my-list/my-list";
import history from "@src/history";
import UserPage from "@pages/user-page/user-page";
import NotFound from "@pages/not-found/not-found";
import AddReview from "@pages/add-review/add-review";
import MainScreen from '@pages/main-screen/main-screen';
import MoviePlayer from "@components/movie-player/movie-player";
import MovieCardFull from "@pages/movie-card-full/movie-card-full";


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
