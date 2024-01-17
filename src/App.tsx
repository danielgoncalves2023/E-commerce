import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/Layout';
import Home from './pages/Home';

export default function App() {
  return (
    <ChakraProvider>
        <Home />
    </ChakraProvider>
  );
}