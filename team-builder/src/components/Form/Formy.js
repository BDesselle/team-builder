import React from 'react';
import { Button, Form, Divider, Header, Segment } from 'semantic-ui-react';

const Formy = ({ addMember, editingMember, editMember }) => {
  const [member, setMember] = React.useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChange = (change) => {
    const { name, value } = change.target;
    setMember({ ...member, [name]: value })
  }

  React.useEffect(() => {
    if (editingMember) {
      setMember(editingMember)
    }
  }, [editingMember])

  const addTeamMember = (add) => {
    addMember(member);
    setMember({
      name: '',
      email: '',
      role: '',
    });
    add.preventDefault()
  }

  const editTeamMember = (edit) => {
    editMember(member);
    setMember({
      name: '',
      email: '',
      role: '',
    });
    edit.preventDefault()
  }

  const segStyle = {
    width: '500px',
    margin: '0 auto',
  };

  const formStyle = {
    margin: '0 auto',
    width: '350px',
  };

  const { name, email, role } = member;

  if (editingMember) {
    return (
      <React.Fragment>
        <Segment style={segStyle} raised >
          <Header as='h2'>Create A Team Member</Header>
          <div style={formStyle}>
            <Form onSubmit={editTeamMember}>
              <Form.Field>
                <Form.Input
                  label='Name'
                  name='name'
                  placeholder='Name'
                  value={name}
                  onChange={(change) => handleChange(change)}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label='Email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={(change) => handleChange(change)}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label='Role'
                  name='role'
                  placeholder='Role'
                  value={role}
                  onChange={(change) => handleChange(change)}
                />
              </Form.Field>
              <Divider hidden />
              <Button color='green'>Submit</Button>
            </Form>
          </div>
        </Segment>
      </React.Fragment >
    );
  }
  else {
    return (
      <React.Fragment>
        <Segment style={segStyle} raised >
          <Header as='h2'>Create A Team Member</Header>
          <div style={formStyle}>
            <Form onSubmit={addTeamMember}>
              <Form.Field>
                <Form.Input
                  label='Name'
                  name='name'
                  placeholder='Name'
                  value={name}
                  onChange={(change) => handleChange(change)}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label='Email'
                  name='email'
                  placeholder='Email'
                  value={email}
                  onChange={(change) => handleChange(change)}
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  label='Role'
                  name='role'
                  placeholder='Role'
                  value={role}
                  onChange={(change) => handleChange(change)}
                />
              </Form.Field>
              <Divider hidden />
              <Button color='green'>Submit</Button>
            </Form>
          </div>
        </Segment>
      </React.Fragment >
    );
  }
};

export default Formy;