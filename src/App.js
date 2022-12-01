import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import Cart from './pages/Cart'
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
      <Cart />
    </ChakraProvider>

    </Provider>
    
  );
}

export default App;
