import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import StockDashboardPage from '../components/StockDashboardPage';
import AddTransactionPage from '../components/AddTransactionPage';
import EditTransactionPage from '../components/EditTransactionPage';
import HelpPage from '../components/HelpPage';
import ErrorPage from '../components/ErrorPage';
import Header from '../components/Header';
import Footer from '../components/Footer';


const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={StockDashboardPage} exact={true} />
        <Route path='/add' component={AddTransactionPage} />
        <Route path='/edit/:id' component={EditTransactionPage} />
        <Route path='/help' component={HelpPage} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
 
  </Router>
);

export default AppRouter;