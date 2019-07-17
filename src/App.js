import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import  Header  from 'components/shared/Header';
import RentalList from "components/rental/rental-listing/RentalList";
import RentalDetail from "components/rental/rental-detail/RentalDetail";
import Login from 'components/login/Login';
import Register from 'components/register/Register';
import * as actions from './actions/index';
import{ProtectedRoute}from'./components/shared/auth/ProtectedRoute';
import{LoggedInRoute}from'./components/shared/auth/LoggedinRoute';
import 'App.css';


const store = require('./reducers').init();
class App extends Component {
  componentWillMount(){
    this.checkAuthState();
  }
  checkAuthState(){
    store.dispatch(actions.checkAuthState());
  }

  logout(){
    store.dispatch(actions.logout());
  }

  render() { 

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header logout={this.logout} />

            <div className="container">

              <Route exact path="/" render={() => <Redirect to='/rentals' />} />
              <Route exact path="/rentals" component={RentalList} />
              <ProtectedRoute exact path="/rentals/:id" component={RentalDetail} />
              <Route exact path="/login" component={Login} />
              <LoggedInRoute exact path="/register" component={Register} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
