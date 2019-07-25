import React from 'react';

const Form = ({ addMember }) => {
  const [member, setMember] = React.useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChange = (change) => {
    const { name, value } = change.target;
    setMember({ ...member, [name]: value })
  }

  const handleSubmit = (submit) => {
    addMember(member);
    submit.preventDefault();
  }

  return (
    <React.Fragment>
      <h3>Create A Team Member</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <div>
            <input name='name' placeholder='Name' onChange={(change) => handleChange(change)} />
          </div>
        </label>
        <label>
          Email
          <div>
            <input name='email' placeholder='Email' onChange={(change) => handleChange(change)} />
          </div>
        </label>
        <label>
          Role
          <div>
            <select name='name' placeholder='Role' onChange={(change) => handleChange(change)}>
              <option value="fsDev">Fullstack Developer</option>
              <option value="beDev">Backend Developer</option>
              <option value="feDev">Frontend Developer</option>
              <option value="uiux">UI/UX Designer</option>
            </select>
          </div>
        </label>
        <br></br>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;