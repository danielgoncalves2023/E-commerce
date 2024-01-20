import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home';
import './App.css';
import { Search } from './pages/Search';

export default function App() {
  return (
    <ChakraProvider>
        <Search />
    </ChakraProvider>
  );
}