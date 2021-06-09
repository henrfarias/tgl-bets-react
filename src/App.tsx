import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
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
      <ToastContainer
        position="top-right"
        style={{'fontSize': '1.5rem'}}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  );
};

export default App;
