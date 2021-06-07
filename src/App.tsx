import React from 'react';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import Routes from './routes';
import store from './store';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
      <Footer />
    </Provider>
  );
};

export default App;
