import React from 'react';
import './App.css';
import Form from './components/Form/Form';

function App() {
  const [team, setTeam] = React.useState([]);
  const [editingMember, setMember] = React.useState();

  const handleTeam = (member) => {
    return setTeam([...team, member]);
  }

  const editMember = member => {
    const index = team.indexOf(editingMember);
    setMember();
    return setTeam(
      team.map((teamMember, i) => {
        if (i === index) {
          return (teamMember = member);
        }
        else {
          return teamMember;
        }
      })
    );
  };

  return (
    <div className="App">
      <h1>Team Builder App</h1>
      <br></br>
      <Form
        addMember={member => handleTeam(member)}
        editingMember={editingMember}
        editMember={member => editMember(member)}
      />
      <br></br>
      {team.map((member, index) => {
        return (
          <div key={index}>
            <h2>Name: {member.name}</h2>
            <h3>Email: {member.email}</h3>
            <h3>Role: {member.role}</h3>
            <button onClick={() => setMember(member)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
