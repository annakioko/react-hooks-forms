import React from "react";

function Form(props) {
  return (
    <Form>
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastnames}
      />
      <button type="submit">Submit</button>
    </Form>
  );
}

export default Form;