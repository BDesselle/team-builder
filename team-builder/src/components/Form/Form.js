import React from 'react';

const Form = ({ addMember }) => {
  // Setting up state
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
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <div>
            <input name='name' onChange={(change) => handleChange(change)} />
          </div>
        </label>
        <label>
          Email
          <div>
            <input name='email' onChange={(change) => handleChange(change)} />
          </div>
        </label>
        <label>
          Role
          <div>
            <input name='name' onChange={(change) => handleChange(change)} />
          </div>
        </label>
      </form>
    </React.Fragment>
  );
};

export default Form;