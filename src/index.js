import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Tema from './Tema';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <ChakraProvider>
        <ColorModeScript initialColorMode={Tema.config.initialColorMode} />
                <App/>
        </ChakraProvider>
    </>


);