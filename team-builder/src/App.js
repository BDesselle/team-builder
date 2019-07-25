import React from 'react';
import './App.css';
import { Button, Divider, Header, Segment, Card } from 'semantic-ui-react';
import Formy from './components/Form/Formy';

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

  const segStyle = {
    width: '500px',
    margin: '0 auto',
  };

  return (
    <div className="App">
      <Header as='h1'>Team Builder</Header>
      <Divider />
      <Formy
        addMember={member => handleTeam(member)}
        editingMember={editingMember}
        editMember={member => editMember(member)}
      />
      <div>
        <Divider hidden />
        <Segment style={segStyle} raised >
          <Header as='h1'>Team List</Header>
          {team.map((member, index) => {
            return (
              <div key={index}>
                <Card.Group centered>
                  <Card>
                    <Card.Content>
                      <Card.Header>{member.name}</Card.Header>
                      <Card.Meta>{member.email}</Card.Meta>
                      <Card.Description>
                        {member.name} is a <strong>{member.role}</strong>.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button basic color='red' onClick={() => setMember(member)}>Edit</Button>
                    </Card.Content>
                  </Card>
                </Card.Group>
              </div>
            );
          })}
        </Segment>
      </div>
    </div>
  );
}

export default App;
