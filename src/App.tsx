import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <MainRoutes />
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;