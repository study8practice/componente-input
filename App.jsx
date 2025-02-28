import React from 'react';

const App = () => {
  const [nome, setNome] = React.useState('');

  return (
    <form>
      <Input
        label="Nome"
        id="nome"
        type="text"
        value={nome}
        setValue={setNome}
      />
    </form>
  );
};

export default App;
