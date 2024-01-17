import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { Header } from './components/header/Header.tsx';

export default function App() {
  return (
    <ChakraProvider>
        <Header/>
    </ChakraProvider>
  );
}