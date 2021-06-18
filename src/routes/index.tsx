import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import Game from '../pages/Game';
import HistoryGames from '../pages/HistoryGames';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from '../pages/ResetPassword';
import NewPassword from '../pages/NewPassword';

const Routes = () => {
  const statusLog = localStorage.getItem('logged');
  const isLogged = useAppSelector((state) => state.logged.logged);
  const loggin = statusLog ? JSON.parse(statusLog).logged : isLogged;

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/register' component={Register} />
        <Route path='/reset-password' component={ResetPassword}  exact />
        <Route path='/reset-password/new-password' exact component={NewPassword}/>
        <Route path='/history-games'>
          {loggin ? <HistoryGames /> : <Redirect to='/' exact />}
        </Route>
        <Route path='/game'>
          {loggin ? <Game /> : <Redirect to='/' exact />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
