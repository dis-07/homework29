import Counter from './components/Counter';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Counter />
    </ChakraProvider>
  );
}

export default App;
