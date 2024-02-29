import ProductPage from "./components/ProductPage/ProductPage"
import './reset.css'
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <ProductPage />
    </ChakraProvider>
  );
}

export default App
