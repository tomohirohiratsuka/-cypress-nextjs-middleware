import { ReactNode } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import theme from '@styles/theme';

const Layout = ({ children }: { children: ReactNode }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);
export default Layout;
