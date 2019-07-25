import React from 'react';

const Form = ({ addMember, editingMember, editMember }) => {
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

  const { name, email, role } = member;

  if (editingMember) {
    return (
      <React.Fragment>
        <h3>Create A Team Member</h3>
        <form onSubmit={editTeamMember}>
          <label>
            Name
            <div>
              <input
                name='name'
                placeholder='Name'
                value={name}
                onChange={(change) => handleChange(change)}
              />
            </div>
          </label>
          <label>
            Email
            <div>
              <input
                name='email'
                placeholder='Email'
                value={email}
                onChange={(change) => handleChange(change)}
              />
            </div>
          </label>
          <label>
            Role
            <div>
              <input
                name="role"
                value={role}
                onChange={(event) => handleChange(event)}
              />
              {/* <select name='name' placeholder='Role' onChange={(change) => handleChange(change)}>
                <option value="0">Fullstack Developer</option>
                <option value="1">Backend Developer</option>
                <option value="2">Frontend Developer</option>
                <option value="3">UI/UX Designer</option>
              </select> */}
            </div>
          </label>
          <br></br>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </React.Fragment>
    );
  }
  else {
    return (
      <React.Fragment>
        <h3>Create A Team Member</h3>
        <form onSubmit={addTeamMember}>
          <label>
            Name
            <div>
              <input
                name='name'
                placeholder='Name'
                value={name}
                onChange={(change) => handleChange(change)}
              />
            </div>
          </label>
          <label>
            Email
            <div>
              <input
                name='email'
                placeholder='Email'
                value={email}
                onChange={(change) => handleChange(change)}
              />
            </div>
          </label>
          <label>
            Role
            <div>
              <input
                name="role"
                placeholder='Role'
                value={role}
                onChange={(event) => handleChange(event)}
              />
            </div>
          </label>
          <br></br>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </React.Fragment>
    );
  }
};

export default Form;