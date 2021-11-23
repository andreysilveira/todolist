import React from 'react';
import Todo from './components/Board/Todo';
import { Footer } from './components/Footer/Footer';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Todo />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
