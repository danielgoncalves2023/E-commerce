import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import './App.css';

export default function App() {
  return (
    <ChakraProvider>
        <Home />
    </ChakraProvider>
  );
}