import React from 'react';
import './App.css';
import Form from './components/Form/Form';

function App() {
  const [team, setTeam] = React.useState([]);
  const handleTeam = (member) => {
    return setTeam([...team, member]);
  }

  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <Form addMember={member => handleTeam(member)} />
    </div>
  );
}

export default App;
