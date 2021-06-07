import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import Game from '../pages/Game';
import HistoryGames from '../pages/HistoryGames';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from '../pages/ResetPassword';

const Routes = () => {
  const isLogged = useAppSelector((state) => state.logged.logged);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/register' component={Register} />
        <Route path='/reset-password' component={ResetPassword} />
        <Route path='/history-games'>
          {isLogged ? <HistoryGames /> : <Redirect to='/' exact />}
        </Route>
        <Route path='/game'>
          {isLogged ? <Game /> : <Redirect to='/' exact />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
