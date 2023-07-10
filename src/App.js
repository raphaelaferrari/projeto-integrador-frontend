import { useState } from "react";
import { GlobalStyle } from "./GlobalStyles.styled";
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContext";

function App() {

  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [token, setToken] = useState()
  const [apelido, setApelido] = useState()


  const context = {
    email: email,
    setEmail: setEmail,
    senha: senha,
    setSenha: setSenha,
    token: token, 
    setToken: setToken,
    apelido: apelido, 
    setApelido: setApelido
  }
  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyle/>
      <Router/>
    </GlobalContext.Provider>
  );
}

export default App;
