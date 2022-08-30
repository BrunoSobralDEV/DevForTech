import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style';

export function Home() {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <Container>
      { isLoad ? ( <div><p>Carregando...</p></div> ) : (
        <div>
          <h1>Home</h1>

          <Link to='contact'>Contatos</Link>
        </div>
      ) }

      <div className='button-container'>
        <button onClick={() => setIsLoad(!isLoad)}>
          clique aqui
        </button>

      </div>
    </Container>
  )
};
