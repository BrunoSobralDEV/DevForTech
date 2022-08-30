import { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";

interface IData {
  name: string;
  email: string;
}

export function Contact() {
  const [data, setData] = useState<IData>({} as IData);

  return (
    <Container>
      <div className="form-wrapper">
        <h1>Contato</h1>
        Nome: {data.name}{" "}
        E-mail: {data.email}
        <div className="card">
          <form onSubmit={() => {}}>
            <input 
              type="text" 
              placeholder="Nome" 
              onChange={e=> setData({...data, name: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="E-mail" 
              onChange={e=> setData({...data, email: e.target.value})}
            />
            <input 
              type="submit" 
              value="Cadastrar" 
            />
          </form>
        </div>

        <Link to='/'>Voltar para Home</Link>
      </div>
    </Container>
  )
};
