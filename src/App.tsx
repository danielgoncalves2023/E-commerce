import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import { Layout } from './components/Layout';
import { AppContextProvider } from './components/AppContext';
import { useMediaQuery } from 'react-responsive';
import { SizeNotSupported } from './pages/SizeNotSupported';

function App() {
  const notIsDesktopOrLaptop = useMediaQuery({
    query: '(max-device-width: 420px)'
  });

  return (
    <AppContextProvider>
      <BrowserRouter>
        <ChakraProvider>
          {
            notIsDesktopOrLaptop ?
              (
                <SizeNotSupported />
              ) :
              (
                <Layout>
                  <MainRoutes />
                </Layout>
              )
          }
        </ChakraProvider>
      </BrowserRouter>
    </AppContextProvider >
  );
}

export default App;