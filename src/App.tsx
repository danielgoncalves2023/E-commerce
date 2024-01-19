import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import './App.css';

export default function App() {
  return (
    <ChakraProvider>
        <Home />
    </ChakraProvider>
  );
}