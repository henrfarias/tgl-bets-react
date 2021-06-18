import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Game from '../pages/Game';
import HistoryGames from '../pages/HistoryGames';
import Login from '../pages/Login';
import NewPassword from '../pages/NewPassword';
import Register from '../pages/Register';
import ResetPassword from '../pages/ResetPassword';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/register' component={Register} />
        <Route path='/reset-password' component={ResetPassword} exact />
        <Route path='/reset-password/new-password' component={NewPassword} />
        <Route path='/history-games' component={HistoryGames} />
        <Route path='/game' component={Game} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
