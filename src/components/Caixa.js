import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
const Caixa = () => {
    return  (
        <>
            <Box 
               // bg='red.200'
                maxWidth='600px'
                maxHeight='200px'
                m='auto'
                p='10'
                color='#f00'
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection='column'
                borderRadius="md"
                boxShadow='2xl'
            >
                <Text
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                    fontSize="28px"
                    fontWeight="extrabold"
                >
                    Bem Vindo ao Chakra UI
                </Text>
                <Button
                    colorScheme="teal"
                    _hover={{
                      background: "white",
                      color: "teal.500",
                    }}
                >
                    Hover Me
                </Button>
            </Box>
        </> 
    );
    
}
export default Caixa;