import React from "react";
import { useColorMode, Button } from "@chakra-ui/react";

const CorTema = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <header>
        <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        </header>
    )
}

export default CorTema