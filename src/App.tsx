import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import { Layout } from './components/Layout';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <ChakraProvider>
            <Layout>
              <MainRoutes />
            </Layout>
          </ChakraProvider>
        </Provider>
      </BrowserRouter>
  );
}

export default App;