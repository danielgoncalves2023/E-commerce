import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import { Layout } from './components/Layout';
import { AppContextProvider } from './components/AppContext';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </BrowserRouter>
    </AppContextProvider >
  );
}

export default App;