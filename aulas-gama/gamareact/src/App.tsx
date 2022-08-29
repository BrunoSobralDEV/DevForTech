import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles';
import { RoutesApp } from './routes';


function App() {
  return (
    <BrowserRouter>
      <RoutesApp />

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
